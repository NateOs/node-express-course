const express = require("express");
const app = express();

// the logger middleware func
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  const ip = req.ip;

  console.log(method, url, time, ip);
  next(); // this passes on to the GET method, very important!
  // either you send a response or you pass to next middleware
};

// the middleware implemented
app.get("/", logger, function (req, res) {
  res.send("Home");
});

app.listen(5000, () => {
  "Server running at port 5000";
});
