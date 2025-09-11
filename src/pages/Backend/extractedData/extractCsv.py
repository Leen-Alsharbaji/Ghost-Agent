import csv
import json

with open('Backend\CompanyData\synthetic_flight_passenger_data.csv', mode='r', newline='', encoding='utf-8') as csvfile:
    data = list(csv.DictReader(csvfile))

with open('Backend\CompanyData\synthetic_flight_passenger_data.json', mode='w', encoding='utf-8') as jsonfile:
    json.dump(data, jsonfile, indent=4)

