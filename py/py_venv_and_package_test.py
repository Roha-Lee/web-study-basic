import requests
r = requests.get('http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99')
rjson = r.json()
# print(r)
# print(rjson)

# print(rjson['RealtimeCityAir']['row'][0]['NO2'])
rows = rjson['RealtimeCityAir']['row']
for row in rows:
    if row['IDEX_MVL'] < 70:
        print(row['MSRSTE_NM'], row['IDEX_MVL'])    