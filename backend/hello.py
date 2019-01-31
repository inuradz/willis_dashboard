from flask import Flask, jsonify
from flask_cors import CORS
import requests 
import json
import datetime
import os

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/")
def hello():
    return "Welcome to the backend"

@app.route("/api/deputy")
def getRoster():
    url = 'https://mcic.au.deputy.com/api/v1/resource/Roster'
    headers = {'Authorization': 'OAuth '+os.environ['DEPUTY_TOKEN']}
    #Need to generate the query needed
    payload =   { 
                    'search' : 
                        {'f1':{'field':'TotalTime', 'type':'is', 'data':''}
                    },
                    'sort' : {"StartTime":'desc'},
                }

    response = requests.post(url+'/QUERY',headers=headers,data=json.dumps(payload))
    arr = response.json()
    #These are the people who are rostered on today
    people = []

    for obj in arr:
        #"OperationalUnitName" This is used to tell which space the person is working
        #This checks to see whether it is the right space
        print(obj["_DPMetaData"]["OperationalUnitInfo"]["OperationalUnitName"])
        if obj["_DPMetaData"]["OperationalUnitInfo"]["OperationalUnitName"] == "Willis Annex Makerspace":
            #This is used to check if that person is working today
            if obj['StartTimeLocalized'].startswith(datetime.datetime.today().strftime('%Y-%m-%d')):
                if not isinstance(obj["_DPMetaData"]["EmployeeInfo"],list):
                    #This means there is a person rostered
                    name = obj["_DPMetaData"]["EmployeeInfo"]['DisplayName']
                    startTime = obj["StartTime"]
                    endTime = obj["EndTime"]
                    data =  {
                                'name':name,
                                'start':startTime,
                                'end': endTime,
                            }
                    people.append(data)
    people.reverse()
    print(people)
    return jsonify(people)

@app.route("/api/timetable")
def getTimetable():
    return "This is the timetable of what will be used for the space"
 
if __name__ == "__main__":
    app.run()