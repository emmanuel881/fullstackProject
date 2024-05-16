const Workout = require("../models/workoutsModel");
const mongoose = require("mongoose");

//get all workouts
const getworkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//single workout
const getSingleworkout = async (req, res) => {
  const { id } = req.params;

  //verify the id is valid or system will crash
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "do file with that id" });
  }
  res.status(200).json(workout);
};

//create new workout
const createworkout = async (req, res) => {
  const { title, load, reps } = req.body;
  //add doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete workout
const deleteworkout = async (req, res) => {
  const { id } = req.params;
  //verify the id is valid or system will crash
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "do file with that id" });
  }
  res.status(200).json(workout);
};

//update a workout
const updateworkout = async (req, res) => {
  const { id } = req.params;
  //verify the id is valid or system will crash
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(404).json({ error: "do file with that id" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createworkout,
  getworkouts,
  getSingleworkout,
  deleteworkout,
  updateworkout,
};
