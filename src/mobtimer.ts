import express from "express";
const app = express();
const port = 8080 || process.env.PORT;

var startTimer = getCurrentTimeInSeconds();
var endDate = getCurrentTimeInSeconds();
var duration = 10;


function getCurrentTimeInSeconds(): number {
  return new Date().getTime() / 1000;
}

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.get("/start", (req, res) => {
  startTimer = getCurrentTimeInSeconds();
  endDate = startTimer + duration;
  res.send(`start time ${startTimer}`);
});

app.get("/current", (req, res) => {
  var currentTimer = getCurrentTimeInSeconds();
  var isSliceTimeEnded = currentTimer > endDate
  res.send(`end time ${endDate} - current time ${currentTimer} - is ended : ${isSliceTimeEnded} `);
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});