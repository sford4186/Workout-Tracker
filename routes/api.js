const express = require("express").Router();
const db = require("../models")

express.get("/api/workouts", (req, res)=>{
    db.Workout.find()
    .then(workouts=>{
        console.log(workouts)
        res.json(workouts)
    })
    .catch(err=>res.json(err))
})


express.post("/api/workouts", (req, res)=>{
    console.log(req)
    db.Workout.find()
    .then(workouts=>{
        console.log(workouts)
        res.json(workouts)
    })
    .catch(err=>res.json(err))
})

express.put("/api/workouts/:id", (req, res)=>{
  
   db.Workout.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbWorkout) {
    res.json(dbWorkout);
    console.log(dbWorkout)
  });
});

express.get("/api/workouts/range", function(req, res) {
    console.log(req)
    db.Workout.find()
    .then(workouts=>{
        console.log(workouts)
        res.json(workouts)
    })
    .catch(err=>res.json(err))
})
  


module.exports = express