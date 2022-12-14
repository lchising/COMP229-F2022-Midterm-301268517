/* File Name: index.js
Student Name: CHI SING LEUNG
Student ID: 301268517
Date: 27 Oct 2022
Description: Add for Midterm
*/


// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let car = require("../models/cars");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    cars: "",
  });
});

module.exports = router;
