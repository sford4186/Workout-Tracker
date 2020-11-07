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



module.exports = express