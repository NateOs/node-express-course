const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  return name
    ? res.status(200).send(`Welcome ${name}`)
    : res
        .status(401)
        .json({ success: false, msg: "please provide name value" });
});

module.exports = router;
