const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  members: [],
  tasks: []
});

module.exports = mongoose.model("Project", ProjectSchema);
