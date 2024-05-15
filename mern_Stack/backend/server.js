//install dotenv to use enviroment variablesles
require("dotenv").config();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

const express = require("express");
const app = express();

//middleware
//express.json looks if there is any data sent to the server via the body
app.use(express.json());

//connect to db
mongoose
  .connect(process.env.mongoURL)
  .then(() => {
    //server instatance
    app.listen(port, () => {
      console.log("*********server*************");
      console.log("connected to db listening to port " + port);
    });
  })
  .catch((err) => {
    console.log("******error****");
    console.log(err);
  });

//routes
app.use("/api/workouts/", workoutRoutes);
