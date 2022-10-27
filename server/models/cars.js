/* File Name: car.js
Student Name: CHI SING LEUNG
Student ID: 301268517
Date: 27 Oct 2022
Description: Add for Midterm
*/


let mongoose = require("mongoose");

// create a model class
let Car = mongoose.Schema(
  {
    Carname: String,
    Category: String,
    Carmodel: String,
    Price: Number,
  },
  {
    collection: "cars",
  }
);

module.exports = mongoose.model("Car", Car);
