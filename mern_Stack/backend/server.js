const port = process.env.PORT || 8000;
const pp = process.env.PP || 8000;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
//server instatance
app.listen(port, (req, res) => {
  console.log(port + "hello world" + pp);
});
