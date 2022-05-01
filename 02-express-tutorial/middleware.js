const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "john") {
    req.user = { name: "john", id: 3 };
    next();
  } else {
    return res.status(401).send("Unauthorized");
  }
  console.log("authorize");
  next();
};

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

module.exports = { authorize, logger };
