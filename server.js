const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/project_manager", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const projectRouter = require("./projects-router.js");

const server = express();
server.use(express.json());

server.use("/api/projects", projectRouter);

module.exports = server;
