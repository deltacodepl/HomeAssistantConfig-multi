from pytz import timezone
from xml.etree import ElementTree
import requests
from urllib3.exceptions import InsecureRequestWarning

from homeassistant.core import HomeAssistant
from .const import DEFAULT_PARSE_DICT, USER_AGENT, ACCEPTS
from .parser import parse_data, parse_library


def check_headers(response):
    if 'text/xml' not in response.headers.get('Content-Type', '') and 'application/xml' not in response.headers.get('Content-Type', ''):
        raise ValueError(f"Expected XML but received different content type: {response.headers.get('Content-Type')}")

class PlexApi():
    def __init__(
        self,
        hass: HomeAssistant,
        name: str,
        ssl: bool,
        token: str,
        max: int,
        on_deck: bool,
        host: str,
        port: int,
        section_types: list,
        section_libraries: list,
        exclude_keywords: list
    ):
        self._hass = hass
        self._ssl = 's' if ssl else ''
        self._token = token
        self._max = max
        self._on_deck = on_deck
        self._host = host
        self._port = port
        self._section_types = section_types
        self._section_libraries = section_libraries
        self._exclude_keywords = exclude_keywords
        self._images_base_url = f'/{name.lower() + "_" if len(name) > 0 else ""}plex_recently_added'
    
    async def get_trailer_url(self, item_key):
        extras_url = f'http{self._ssl}://{self._host}:{self._port}/library/metadata/{item_key}/extras?X-Plex-Token={self._token}'
        try:
            extras_res = await self._hass.async_add_executor_job(
                requests.get,
                extras_url,
                {
                    "headers": {
                        "User-agent": USER_AGENT,
                        "Accept": ACCEPTS,
                    },
                    "timeout": 10
                }
            )
            check_headers(extras_res)
            root = ElementTree.fromstring(extras_res.text)
            
            for video in root.findall(".//Video"):
                if video.get("type") == "clip" and video.get("subtype") == "trailer":
                    part = video.find(".//Part")
                    if part is not None and part.get("key"):
                        return f'http{self._ssl}://{self._host}:{self._port}{part.get("key")}&X-Plex-Token={self._token}'
            
        except Exception as e:
            print(f"Error fetching trailer: {str(e)}")
        return None

    async def update(self):
        info_url = 'http{0}://{1}:{2}'.format(
            self._ssl,
            self._host,
            self._port
        )

        """ Getting the server identifier """
        try:
            info_res = await self._hass.async_add_executor_job(
                requests.get,
                f'{info_url}?X-Plex-Token={self._token}', 
                {
                    "headers":{
                        "User-agent": USER_AGENT,
                        "Accept": ACCEPTS,
                    },
                    "timeout":10
                }
            )
            check_headers(info_res)
            root = ElementTree.fromstring(info_res.text)
            identifier = root.get("machineIdentifier")
        except OSError as e:
            raise FailedToLogin

        url_base = f'{info_url}/library/sections'
        all_libraries = f'{url_base}/all'
        recently_added = (url_base + '/{0}/recentlyAdded?X-Plex-Container-Start=0&X-Plex-Container-Size={1}')
        on_deck = (url_base + '/{0}/onDeck?X-Plex-Container-Start=0&X-Plex-Container-Size={1}')

        """Find the ID of all libraries in Plex."""
        sections = []
        libs = []
        try:
            libraries = await self._hass.async_add_executor_job(
                requests.get,
                f'{all_libraries}?X-Plex-Token={self._token}', 
                {
                    "headers":{
                        "User-agent": USER_AGENT,
                        "Accept": ACCEPTS,
                    },
                    "timeout":10
                }
            )
            check_headers(libraries)
            root = ElementTree.fromstring(libraries.text)
            for lib in root.findall("Directory"):
                libs.append(lib.get("title"))
                if lib.get("type") in self._section_types and (len(self._section_libraries) == 0 or lib.get("title") in self._section_libraries):
                    sections.append({'type': lib.get("type"),'key': lib.get("key")})
        except OSError as e:
            raise FailedToLogin

        """ Looping through all libraries (sections) """
        data = {
            'all': {}
        }
        for s in self._section_types:
            data[s] = []

        for library in sections:
            recent_or_deck = on_deck if self._on_deck else recently_added
            sub_sec = await self._hass.async_add_executor_job(
                requests.get,
                f'{recent_or_deck.format(library["key"], self._max * 2)}&X-Plex-Token={self._token}', 
                {
                    "headers":{
                        "User-agent": USER_AGENT,
                        "Accept": ACCEPTS,
                    },
                    "timeout":10
                }
            )
            check_headers(sub_sec)
            root = ElementTree.fromstring(sub_sec.text)
            parsed_libs = parse_library(root)
            
            # Fetch trailer URLs for each item
            for item in parsed_libs:
                item['trailer'] = await self.get_trailer_url(item['ratingKey'])
            
            if library["type"] not in data['all']:
                data['all'][library["type"]] = []
            data['all'][library["type"]] += parsed_libs
            data[library["type"]] += parsed_libs

        data_out = {}
        for k in data.keys():
            data_out[k] = {'data': [DEFAULT_PARSE_DICT] + parse_data(data[k], self._max, info_url, self._token, identifier, k, self._images_base_url, k == "all")}

        return {
            "data": {**data_out},
            "online": True,
            "libraries": libs
        }
    

class FailedToLogin(Exception):
    "Raised when the Plex user fail to Log-in"
    pass
