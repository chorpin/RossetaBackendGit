const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from server Port 8080",
    App: "ptolemy",
  });
});
app.listen(port, () => {
  console.log("Ptolemy Whispering....");
});
//
