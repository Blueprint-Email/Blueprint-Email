import datetime
import json
import eml_parser


def json_serial(obj):
    if isinstance(obj, datetime.datetime):
        serial = obj.isoformat()
        return serial


with open('😍 Like Xbox and LEGO_ Check out these popular finds..eml', 'rb') as fhdl:
    raw_email = fhdl.read()

parsed_eml = eml_parser.eml_parser.decode_email_b(raw_email)

data = json.dumps(parsed_eml, default=json_serial)
print(data)

with open('data.json', 'w+') as f:
    json.dump(data, f, ensure_ascii=False)
