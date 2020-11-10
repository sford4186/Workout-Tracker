const express = require("express");
const mongoose= require("mongoose")
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require("./routes/api"))
app.use(require("./routes/view"))

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
