"""Constants for the Open-Meteo Solar Forecast integration."""

from __future__ import annotations

import logging

DOMAIN = "open_meteo_solar_forecast"
LOGGER = logging.getLogger(__package__)

CONF_BASE_URL = "base_url"
CONF_DECLINATION = "declination"
CONF_AZIMUTH = "azimuth"
CONF_MODULES_POWER = "modules_power"
CONF_EFFICIENCY_FACTOR = "efficiency_factor"