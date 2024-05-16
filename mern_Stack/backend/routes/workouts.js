const express = require("express");

const router = express.Router();

const {
  createworkout,
  getworkouts,
  getSingleworkout,
  deleteworkout,
  updateworkout,
} = require("../controllers/workoutController");

//get all workouts
router.get("/", getworkouts);

//get a single workout
router.get("/:id", getSingleworkout);

//POST a new workout
router.post("/", createworkout);

//DELETE a workout
router.delete("/:id", deleteworkout);

//UPDATE a workout
router.patch("/:id", updateworkout);

module.exports = router;
