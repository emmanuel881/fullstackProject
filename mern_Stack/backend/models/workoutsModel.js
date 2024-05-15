const mongoose = require("mongoose");
//lets create a schema
const Schema = mongoose.Schema;

const workoutschema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//create a model
module.exports = mongoose.model("workout", workoutschema);
