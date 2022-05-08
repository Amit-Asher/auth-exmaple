var myHeaders = new Headers();
myHeaders.append("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtaXQiLCJleHBpcmVzSW4iOiIyMDIyLTA1LTA4VDE5OjEwOjA5LjY4OVoiLCJpYXQiOjE2NTIwMzY3MDksImV4cCI6MTY1MjAzNzAwOX0.nYUmr02s0686SINKXAGOF8OEfefVgKI8HyFS-8S9lEM");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": "amit"
});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("localhost:3000/validate", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));