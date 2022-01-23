const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const poolRouter = require("./routes/poolRouter");
const jobseekerRouter = require("./routes/jobseekerRouter");

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));

  app.use(function (req, res, next) {
    console.log("Time:", Date.now());

    next();
  });

  app.use(function (req, res, next) {
    req.addByHeisenberg = "Here we go";
    next();
  });
}

if (process.env.NODE_ENV === "production") {
  app.use(function (req, res, next) {
    console.log("Jesus Christ,,, You are in Production Mode.");
    next();
  });
}
app.use(cors());
app.options("*", cors());
/*
app.post("/api/pool", (req, res) => {
  console.log(req.body);
  //res.send("Response From Ptolemy");
  res.status(200).json({
    status: "success",
    message: "Hello From Ptolemy",
    costumerAdd: req.addByHeisenberg,
  });
});
*/
app.use("/api/v1/pool", poolRouter);
app.use("/api/v1/jobseeker", jobseekerRouter);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from server Port 8080",
    App: "ptolemy",
  });
});
//app.post();

module.exports = app;
