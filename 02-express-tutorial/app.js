const express = require("express");
const { logger, authorize } = require("./middleware");
const app = express();

app.use([authorize, logger]);

// the middleware implemented
app.get("/", function (req, res) {
  res.send("Home");
});
app.get("/about", function (req, res) {
  res.send("About");
});
app.get("/api/products", function (req, res) {
  res.send("Products");
});
app.get("/api/items", function (req, res) {
  res.send("Items");
});

app.listen(5000, () => {
  "Server running at port 5000";
});
