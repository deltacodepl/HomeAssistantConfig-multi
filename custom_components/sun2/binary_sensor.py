"""Sun2 Binary Sensor."""
from __future__ import annotations

from collections.abc import Iterable
from datetime import datetime
from typing import cast

import voluptuous as vol

from homeassistant.components.binary_sensor import (
    DOMAIN as BINARY_SENSOR_DOMAIN,
    PLATFORM_SCHEMA,
    BinarySensorEntity,
    BinarySensorEntityDescription,
)
from homeassistant.config_entries import SOURCE_IMPORT, ConfigEntry
from homeassistant.const import (
    CONF_ABOVE,
    CONF_BINARY_SENSORS,
    CONF_ELEVATION,
    CONF_ENTITY_NAMESPACE,
    CONF_MONITORED_CONDITIONS,
    CONF_NAME,
    CONF_PLATFORM,
    CONF_UNIQUE_ID,
)
from homeassistant.core import CoreState, HomeAssistant, callback
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.entity import Entity
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.event import async_track_point_in_utc_time
from homeassistant.helpers.typing import ConfigType, DiscoveryInfoType
from homeassistant.util import dt as dt_util, slugify

from .config import LOC_PARAMS
from .const import (
    ATTR_NEXT_CHANGE,
    DOMAIN,
    LOGGER,
    MAX_ERR_BIN,
    ONE_DAY,
    ONE_SEC,
    SUNSET_ELEV,
)
from .helpers import (
    LocParams,
    Num,
    Sun2Entity,
    Sun2EntityParams,
    get_loc_params,
    nearest_second,
    sun2_dev_info,
    translate,
)

ABOVE_ICON = "mdi:white-balance-sunny"
BELOW_ICON = "mdi:moon-waxing-crescent"


# elevation
# elevation: <threshold>
# elevation:
#   above: <threshold>
#   name: <friendly_name>


def _val_elevation(config: str | ConfigType) -> ConfigType:
    """Validate configuration."""
    if isinstance(config, str):
        config = {CONF_ELEVATION: {}}
    else:
        config = config.copy()
        value = config[CONF_ELEVATION]
        if isinstance(value, float):
            config[CONF_ELEVATION] = {CONF_ABOVE: value}
        else:
            config[CONF_ELEVATION] = value.copy()
    options = config[CONF_ELEVATION]
    if CONF_ABOVE not in options:
        options[CONF_ABOVE] = "horizon"
    return config


_ELEVATION_SCHEMA = vol.All(
    vol.Any(
        CONF_ELEVATION,
        {
            vol.Required(CONF_ELEVATION): vol.Any(
                vol.Coerce(float),
                {
                    vol.Optional(CONF_ABOVE): vol.Coerce(float),
                    vol.Optional(CONF_NAME): cv.string,
                },
            )
        },
    ),
    _val_elevation,
)

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {
        vol.Required(CONF_MONITORED_CONDITIONS): vol.All(
            cv.ensure_list, [_ELEVATION_SCHEMA]
        ),
        **LOC_PARAMS,
    }
)


class Sun2ElevationSensor(Sun2Entity, BinarySensorEntity):
    """Sun2 Elevation Sensor."""

    def __init__(
        self,
        loc_params: LocParams | None,
        extra: Sun2EntityParams | str | None,
        name: str,
        threshold: float | str,
    ) -> None:
        """Initialize sensor."""
        if not isinstance(extra, Sun2EntityParams):
            # Note that entity_platform will add namespace prefix to object ID.
            self.entity_id = f"{BINARY_SENSOR_DOMAIN}.{slugify(name)}"
            if extra:
                name = f"{extra} {name}"
                extra = None
        self.entity_description = BinarySensorEntityDescription(
            key=CONF_ELEVATION, name=name
        )
        super().__init__(loc_params, cast(Sun2EntityParams | None, extra))
        self._event = "solar_elevation"

        if isinstance(threshold, str):
            self._threshold = SUNSET_ELEV
        else:
            self._threshold = threshold

    def _find_nxt_dttm(
        self, t0_dttm: datetime, t0_elev: Num, t1_dttm: datetime, t1_elev: Num
    ) -> datetime:
        """Find time elevation crosses threshold between two points on elevation curve."""
        # Do a binary search for time between t0 & t1 where elevation is
        # nearest threshold, but also above (or equal to) it if current
        # elevation is below it (i.e., current state is False), or below it if
        # current elevation is above (or equal to) it (i.e., current state is
        # True.)

        slope = 1 if t1_elev > t0_elev else -1

        # Find mid point and throw away fractional seconds since astral package
        # ignores microseconds.
        tn_dttm = nearest_second(t0_dttm + (t1_dttm - t0_dttm) / 2)
        tn_elev = cast(float, self._astral_event(tn_dttm))

        while not (
            (
                self._attr_is_on
                and tn_elev <= self._threshold
                or not self._attr_is_on
                and tn_elev > self._threshold
            )
            and abs(tn_elev - self._threshold) <= MAX_ERR_BIN
        ):
            if (tn_elev - self._threshold) * slope > 0:
                if t1_dttm == tn_dttm:
                    break
                t1_dttm = tn_dttm
            else:
                if t0_dttm == tn_dttm:
                    break
                t0_dttm = tn_dttm
            tn_dttm = nearest_second(t0_dttm + (t1_dttm - t0_dttm) / 2)
            tn_elev = cast(float, self._astral_event(tn_dttm))

        # Did we go too far?
        if self._attr_is_on and tn_elev > self._threshold:
            tn_dttm -= slope * ONE_SEC
            if cast(float, self._astral_event(tn_dttm)) > self._threshold:
                raise RuntimeError("Couldn't find next update time")
        elif not self._attr_is_on and tn_elev <= self._threshold:
            tn_dttm += slope * ONE_SEC
            if cast(float, self._astral_event(tn_dttm)) <= self._threshold:
                raise RuntimeError("Couldn't find next update time")

        return tn_dttm

    def _get_nxt_dttm(self, cur_dttm: datetime) -> datetime | None:
        """Get next time sensor should change state."""
        # Find next segment of elevation curve, between a pair of solar noon &
        # solar midnight, where it crosses the threshold, but in the opposite
        # direction (i.e., where output should change state.) Note that this
        # might be today, tomorrow, days away, or never, depending on location,
        # time of year and specified threshold.

        # Start by finding the next five solar midnight & solar noon "events"
        # since current time might be anywhere from before today's solar
        # midnight (if it is this morning) to after tomorrow's solar midnight
        # (if it is this evening.)
        date = cur_dttm.date()
        evt_dttm1 = cast(datetime, self._astral_event(date, "solar_midnight"))
        evt_dttm2 = cast(datetime, self._astral_event(date, "solar_noon"))
        evt_dttm3 = cast(datetime, self._astral_event(date + ONE_DAY, "solar_midnight"))
        evt_dttm4 = cast(datetime, self._astral_event(date + ONE_DAY, "solar_noon"))
        evt_dttm5 = cast(
            datetime, self._astral_event(date + 2 * ONE_DAY, "solar_midnight")
        )

        # See if segment we're looking for falls between any of these events.
        # If not move ahead a day and try again, but don't look more than a
        # a year ahead.
        end_date = date + 366 * ONE_DAY
        while date < end_date:
            if cur_dttm < evt_dttm1:
                if self._attr_is_on:
                    t0_dttm = cur_dttm
                    t1_dttm = evt_dttm1
                else:
                    t0_dttm = evt_dttm1
                    t1_dttm = evt_dttm2
            elif cur_dttm < evt_dttm2:
                if not self._attr_is_on:
                    t0_dttm = cur_dttm
                    t1_dttm = evt_dttm2
                else:
                    t0_dttm = evt_dttm2
                    t1_dttm = evt_dttm3
            elif cur_dttm < evt_dttm3:
                if self._attr_is_on:
                    t0_dttm = cur_dttm
                    t1_dttm = evt_dttm3
                else:
                    t0_dttm = evt_dttm3
                    t1_dttm = evt_dttm4
            else:  # noqa: PLR5501
                if not self._attr_is_on:
                    t0_dttm = cur_dttm
                    t1_dttm = evt_dttm4
                else:
                    t0_dttm = evt_dttm4
                    t1_dttm = evt_dttm5

            t0_elev = cast(float, self._astral_event(t0_dttm))
            t1_elev = cast(float, self._astral_event(t1_dttm))

            # Did we find it?
            # Note, if t1_elev > t0_elev, then we're looking for an elevation
            # ABOVE threshold. In this case we can't use this range if the
            # threshold is EQUAL to the elevation at t1, because this range
            # does NOT include any points with a higher elevation value. For
            # all other cases it's ok for the threshold to equal the elevation
            # at t0 or t1.
            if (
                t0_elev <= self._threshold < t1_elev
                or t1_elev <= self._threshold <= t0_elev
            ):
                nxt_dttm = self._find_nxt_dttm(t0_dttm, t0_elev, t1_dttm, t1_elev)
                if nxt_dttm - cur_dttm > ONE_DAY:
                    if self.hass.state == CoreState.running:
                        LOGGER.warning(
                            "%s: Sun elevation will not reach %f again until %s",
                            self.name,
                            self._threshold,
                            nxt_dttm.date(),
                        )
                return nxt_dttm

            # Shift one day ahead.
            date += ONE_DAY
            evt_dttm1 = evt_dttm3
            evt_dttm2 = evt_dttm4
            evt_dttm3 = evt_dttm5
            evt_dttm4 = cast(datetime, self._astral_event(date + ONE_DAY, "solar_noon"))
            evt_dttm5 = cast(
                datetime, self._astral_event(date + 2 * ONE_DAY, "solar_midnight")
            )

        # Didn't find one.
        return None

    def _update(self, cur_dttm: datetime) -> None:
        """Update state."""
        cur_elev = cast(float, self._astral_event(cur_dttm))
        self._attr_is_on = cur_elev > self._threshold
        self._attr_icon = ABOVE_ICON if self._attr_is_on else BELOW_ICON
        LOGGER.debug(
            "%s: threshold = %f, elevation = %f", self.name, self._threshold, cur_elev
        )

        nxt_dttm = self._get_nxt_dttm(cur_dttm)

        @callback
        def schedule_update(now: datetime) -> None:
            """Schedule state update."""
            self._unsub_update = None
            self.async_schedule_update_ha_state(True)

        if nxt_dttm:
            self._unsub_update = async_track_point_in_utc_time(
                self.hass, schedule_update, nxt_dttm
            )
            nxt_dttm = dt_util.as_local(nxt_dttm)
        elif self.hass.state == CoreState.running:
            LOGGER.error(
                "%s: Sun elevation never reaches %f at this location",
                self.name,
                self._threshold,
            )
        self._attr_extra_state_attributes = {ATTR_NEXT_CHANGE: nxt_dttm}


def _elevation_name(
    hass: HomeAssistant | None, name: str | None, threshold: float | str
) -> str:
    """Return elevation sensor name."""
    if name:
        return name
    if not hass:
        if isinstance(threshold, str):
            return "Above Horizon"
        if threshold < 0:
            return f"Above minus {-threshold}"
        return f"Above {threshold}"
    if isinstance(threshold, str):
        return translate(hass, "above_horizon")
    if threshold < 0:
        return translate(hass, "above_neg_elev", {"elevation": str(-threshold)})
    return translate(hass, "above_pos_elev", {"elevation": str(threshold)})


def _sensors(
    loc_params: LocParams | None,
    extra: Sun2EntityParams | str | None,
    sensors_config: Iterable[ConfigType],
    hass: HomeAssistant | None = None,
) -> list[Entity]:
    """Create list of entities to add."""
    sensors: list[Entity] = []
    for config in sensors_config:
        if isinstance(extra, Sun2EntityParams):
            unique_id = config[CONF_UNIQUE_ID]
            if extra.entry.source == SOURCE_IMPORT:
                unique_id = f"{extra.entry.entry_id}-{unique_id}"
            extra.unique_id = unique_id
            threshold = config[CONF_ELEVATION]
            name = config.get(CONF_NAME)
        else:
            threshold = config[CONF_ELEVATION][CONF_ABOVE]
            name = config[CONF_ELEVATION].get(CONF_NAME)
        name = _elevation_name(hass, name, threshold)
        sensors.append(Sun2ElevationSensor(loc_params, extra, name, threshold))
    return sensors


async def async_setup_platform(
    hass: HomeAssistant,
    config: ConfigType,
    async_add_entities: AddEntitiesCallback,
    discovery_info: DiscoveryInfoType | None = None,
) -> None:
    """Set up sensors."""
    LOGGER.warning(
        "%s: %s under %s is deprecated. Move to %s:",
        CONF_PLATFORM,
        DOMAIN,
        BINARY_SENSOR_DOMAIN,
        DOMAIN,
    )

    async_add_entities(
        _sensors(
            get_loc_params(config),
            config.get(CONF_ENTITY_NAMESPACE),
            config[CONF_MONITORED_CONDITIONS],
        ),
        True,
    )


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the sensor platform."""
    config = entry.options
    async_add_entities(
        _sensors(
            get_loc_params(config),
            Sun2EntityParams(entry, sun2_dev_info(hass, entry)),
            config.get(CONF_BINARY_SENSORS, []),
            hass,
        ),
        True,
    )
