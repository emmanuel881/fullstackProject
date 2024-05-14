//install dotenv to use enviroment variablesles
const port = process.env.PORT || 8000;

const workoutRoutes = require("./routes/workouts");

const express = require("express");
const app = express();

//routes
app.use("/api/workouts", workoutRoutes);

//server instatance
app.listen(port, () => {
  console.log("*********server*************");
  console.log("running server instance");
});
