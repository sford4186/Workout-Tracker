const express = require("express").Router();
const db = require("../models")
const path = require("path");

express.get("/exercise", function(req, res) {
    // If the user already has an account send them to the members page
    
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
  express.get("/stats", function(req, res) {
    // If the user already has an account send them to the members page
    
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

module.exports = express