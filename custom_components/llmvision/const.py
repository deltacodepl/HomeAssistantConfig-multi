""" Constants for llmvision component"""

# Global constants
DOMAIN = "llmvision"

# Configuration values from setup
CONF_OPENAI_API_KEY = 'openai_api_key'
CONF_ANTHROPIC_API_KEY = 'anthropic_api_key'
CONF_GOOGLE_API_KEY = 'google_api_key'
CONF_LOCALAI_IP_ADDRESS = 'localai_ip'
CONF_LOCALAI_PORT = 'localai_port'
CONF_LOCALAI_HTTPS = 'localai_https'
CONF_OLLAMA_IP_ADDRESS = 'ollama_ip'
CONF_OLLAMA_PORT = 'ollama_port'
CONF_OLLAMA_HTTPS = 'ollama_https'

# service call constants
PROVIDER = 'provider'
MAXTOKENS = 'max_tokens'
TARGET_WIDTH = 'target_width'
MODEL = 'model'
MESSAGE = 'message'
IMAGE_FILE = 'image_file'
IMAGE_ENTITY = 'image_entity'
VIDEO_FILE = 'video_file'
EVENT_ID = 'event_id'
INTERVAL = 'interval'
DETAIL = 'detail'
TEMPERATURE = 'temperature'
INCLUDE_FILENAME = 'include_filename'

# Error messages
ERROR_OPENAI_NOT_CONFIGURED = "OpenAI provider is not configured"
ERROR_ANTHROPIC_NOT_CONFIGURED = "Anthropic provider is not configured"
ERROR_GOOGLE_NOT_CONFIGURED = "Google provider is not configured"
ERROR_LOCALAI_NOT_CONFIGURED = "LocalAI provider is not configured"
ERROR_OLLAMA_NOT_CONFIGURED = "Ollama provider is not configured"
ERROR_NO_IMAGE_INPUT = "No image input provided"
ERROR_HANDSHAKE_FAILED = "Handshake with LocalAI server failed"

# Versions
# https://docs.anthropic.com/en/api/versioning
VERSION_ANTHROPIC = "2023-06-01"

# API Endpoints
ENDPOINT_OPENAI = "https://api.openai.com/v1/chat/completions"
ENDPOINT_ANTHROPIC = "https://api.anthropic.com/v1/messages"
ENDPOINT_GOOGLE = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
ENDPOINT_LOCALAI = "{protocol}://{ip_address}:{port}/v1/chat/completions"
ENDPOINT_OLLAMA = "{protocol}://{ip_address}:{port}/api/chat"