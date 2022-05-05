const express = require("express");
const app = express();

let { people } = require("./data");

// serve static
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json data
app.use(express.json());

// the GET Method
app.get("/api/people", (req, res) => {
  res.status(200).send({ success: true, data: people });
});

// the POST Method
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).send({ success: true, person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  return name
    ? res.status(200).send(`Welcome ${name}`)
    : res
        .status(401)
        .json({ success: false, msg: "please provide name value" });
});

app.listen(5000, () => {
  "Server running at port 5000";
});
