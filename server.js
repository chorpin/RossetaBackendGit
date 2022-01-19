const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
mongoose.connect(process.env.DB).then(() => {
  console.log("DB connected");
});
const app = require("./app.js");
const port = 8080;
//console.log("process:==>env::", process.env);


app.listen(process.env.PORT, () => {
  console.log("ENV by Express", app.get("env"));
  console.log("On the Earth: ", process.env.NODE_ENV);
  console.log("Ptolemy Whispering....");
});
