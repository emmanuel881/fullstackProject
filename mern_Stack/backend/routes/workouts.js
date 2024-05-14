const express = require("express");

const router = express.Router();

//get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

//get a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

//POST a new workout
router.post("/:id", (req, res) => {
  res.json({ msg: "POST a new workout" });
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});

module.exports = router;
