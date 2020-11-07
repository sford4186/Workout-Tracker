const express = require("express").Router();
const db = require("../models")

express.get("/exercise", (req, res)=>{
    res.sendFile(path.join(__dirname + "../public/exercise.html"));
    })
  

module.exports = express