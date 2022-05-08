import requests
import json

url = "http://localhost:3000/generate"

payload = json.dumps({
  "email": "amit"
})
headers = {
  'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtaXQiLCJleHBpcmVzSW4iOiIyMDIyLTA1LTA4VDE5OjEwOjA5LjY4OVoiLCJpYXQiOjE2NTIwMzY3MDksImV4cCI6MTY1MjAzNzAwOX0.nYUmr02s0686SINKXAGOF8OEfefVgKI8HyFS-8S9lEM',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
