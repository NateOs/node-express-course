const express = require("express");
const app = express();

let { people } = require("./data");

// import the people router
const peopleRouter = require("./routes/people");

// import the auth router
const auth = require("./routes/auth");

// serve static
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json data
app.use(express.json());

// setting people base route with middleware
app.use("/api/people", peopleRouter);

app.use("/login", auth);

app.listen(5000, () => {
  "Server running at port 5000";
});
