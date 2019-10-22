const router = require("express").Router();

const Project = require("./models.js");

// get all projects
router.get("/", (req, res) => {
  Project.find((err, projects) => {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      res.status(200).json(projects);
    }
  });
});

// gets a project by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Project.find({ _id: id }, (err, project) => {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      res.status(200).json(project[0]);
    }
  });
});

// add a project
router.post("/", (req, res) => {
  const { name, tasks, members } = req.body;
  if (!name) {
    res.status(422).json({ message: "Name required." });
  } else {
    const p = new Project({
      name,
      tasks,
      members
    });
    p.save(err => {
      if (err) {
        console.error(error);
        res.status(500).end();
      } else {
        res.status(201).json(p);
      }
    });
  }
});

module.exports = router;
