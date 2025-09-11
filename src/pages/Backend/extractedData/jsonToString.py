import json


txtlist = []
with open("Backend\CompanyData\synthetic_flight_passenger_data.json", "r") as f:
    data = json.load(f)   
for row in data[:200]:
    txt = json.dumps(row) 
    txtlist.append(txt)

with open("Backend\CompanyData\synthetic_flight_passenger_data.txt", "w") as f:
    f.write("\n".join(txtlist))