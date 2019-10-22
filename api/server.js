const express = require("express");
const mongoose = require("mongoose");

const Project = require("../models.js");

mongoose.connect("mongodb://localhost/project_manager", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const server = express();
server.use(express.json());

// example document construction
const p = new Project({
  name: "Cool Project",
  tasks: ["brainstorm", "schedule design meeting", "figure out what task 4 is"],
  members: ["human1", "human2", "AI1", "AI2"]
});
console.log(p);

p.save(err => {
  if (err) return console.error(error);
});

server.get("/", (req, res) => {
  res.status(200).send("success");
});

module.exports = server;
