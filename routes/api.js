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
    db.Workout.create({})
    .then(workouts=>{
        console.log(workouts)
        res.json(workouts)
    })
    .catch(err=>res.json(err))
})

express.put("/api/workouts/:id", (req, res)=>{
  
  db.Workout.findByIdAndUpdate(
    req.params.id,
    {$push: {exercises: req.body}},
    {new: true, runValidators: true}
    ).then(function(dbWorkout) {
    res.json(dbWorkout);
    console.log(dbWorkout)
  });
});

express.get("/api/workouts/range", function(req, res) {
    console.log(req)
    db.Workout.find().limit(7)
    .then(workouts=>{
        console.log(workouts)
        res.json(workouts)
    })
    .catch(err=>res.json(err))
})
  


module.exports = express