"use strict";

const express = require("express");
const data = require("./potus");
// const quiz = require("./routes/quiz-route");
// const trainer = require("./routes/trainer-route");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use("/portal", data);
// app.use("/portal", quiz);
// app.use("/portal", trainer);


app.use(express.static(__dirname + "/app/public"));

let port = /*process.env.PORT ||*/ 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})

