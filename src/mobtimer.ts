import express from "express";
const app = express();
const port = 8080 || process.env.PORT;

var startTimer = new Date().getTime() / 1000 ;
var endDate = new Date().getTime() / 1000 ;
var duration = 10;

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.get("/start", (req, res) => {
  startTimer = new Date().getTime() / 1000;
  endDate = startTimer + duration;
  res.send(`start time ${startTimer}`);
});

app.get("/current", (req, res) => {
  var currentTimer = new Date().getTime() / 1000;
  var isSliceTimeEnded = currentTimer > endDate
  res.send(`end time ${endDate} - current time ${currentTimer} - is ended : ${isSliceTimeEnded} `);
});




app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});