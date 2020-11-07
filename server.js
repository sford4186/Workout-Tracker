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
// const databaseUrl = "workouttracker";
// const collections = ["workout"];

// const db = mongojs(databaseUrl, collections);


// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "./public/exercise.html"));
// });

// app.get("/exercise", (req, res) => {
//     res.sendFile(path.join(__dirname + "./public/exercise.html"));
//   });
//   app.get("/stats", (req, res) => {
//     res.sendFile(path.join(__dirname + "./public/stats.html"));
//   });
//   app.get("/api/workouts", (req, res) => {
//     res.sendFile(path.join(__dirname + "./public/stats.html"));
//   });
//   app.get("/api/workouts/range", (req, res) => {
//     res.sendFile(path.join(__dirname + "./public/stats.html"));
//   });
//   app.get("/api/exercise/:id", (req, res) => {
//     res.sendFile(path.join(__dirname + "./public/stats.html"));
//   });
// app.post("/submit", (req, res) => {
//   console.log(req.body);

//   db.notes.insert(req.body, (error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(data);
//     }
//   });
// });

// app.get("/exercise", (req, res) => {
//   db.notes.find({}, (error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// app.get("/find/:id", (req, res) => {
//   db.notes.findOne(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

// app.post("/update/:id", (req, res) => {
//   db.notes.update(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     {
//       $set: {
//         title: req.body.title,
//         note: req.body.note,
//         modified: Date.now()
//       }
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   db.notes.remove(
//     {
//       _id: mongojs.ObjectID(req.params.id)
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

// app.delete("/clearall", (req, res) => {
//   db.notes.remove({}, (error, response) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(response);
//     }
//   });
// });
app.use(require("./routes/api"))
app.use(require("./routes/view"))

app.listen(3000, () => {
  console.log("App running on port 3000!");
});