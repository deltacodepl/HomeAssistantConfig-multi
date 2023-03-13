


from ..global_variables import GlobalVariables as Gb
from ..const            import (UNKNOWN, HIGH_INTEGER, CRLF_DOT, )
from .common            import (round_to_zero,  )
from .messaging         import (log_debug_msg, log_exception, log_debug_msg, log_error_msg, log_rawdata,
                                _trace, _traceha, )
from .time_util         import (secs_since, secs_to_time, secs_to_time_str, )

import homeassistant.util.dt       as dt_util
#<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
#
#   Formatting functions
#
#<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
#--------------------------------------------------------------------
def format_gps(latitude, longitude, accuracy, latitude_to=None, longitude_to=None):
    '''Format the GPS string for logs & messages'''

    if longitude is None or latitude is None:
        gps_text = UNKNOWN
    else:
        accuracy_text = (f"±{accuracy:.0f}m)") if accuracy > 0 else ")"
        gps_to_text   = (f" to {latitude_to:.5f}, {longitude_to:.5f})") if latitude_to else ""
        gps_text      = f"({latitude:.5f}, {longitude:.5f}{accuracy_text}{gps_to_text}"

    return gps_text

#--------------------------------------------------------------------
def format_list(arg_list):
    formatted_list = str(arg_list)
    formatted_list = formatted_list.replace("[", "").replace("]", "")
    formatted_list = formatted_list.replace("{", "").replace("}", "")
    formatted_list = formatted_list.replace("'", "").replace(",", f"{CRLF_DOT}")

    return (f"{CRLF_DOT}{formatted_list}")
#--------------------------------------------------------------------
def format_cnt(desc, n):#<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    return f", {desc}(#{n})" if n > 1 else ''