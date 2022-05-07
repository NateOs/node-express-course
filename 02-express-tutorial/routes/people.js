const express = require("express");
const router = express.Router();

let { people } = require("../data");

// the GET Method
router.get("/", (req, res) => {
  res.status(200).send({ success: true, data: people });
});

// the POST Method
router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).send({ success: true, person: name });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  res.status(200).send({
    success: true,
    person: {
      name,
      id,
    },
  });
});

router.delete("/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res.status(400).json({
      success: false,
      msg: `person ${req.params.id} is not a valid id or not found`,
    });
  }

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id),
  );

  return res.status(200).send({ success: true, data: newPeople });
});

module.exports = router;
