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

  Project.findOne({ _id: id }, (err, project) => {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      res.status(200).json(project);
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

// update a project
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, tasks, members } = req.body;

  Project.updateOne({ _id: id }, { name, tasks, members }, err => {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      Project.findOne({ _id: id }, (err, project) => {
        if (err) {
          console.error(err);
          res.status(500).end();
        } else {
          res.status(200).json(project);
        }
      });
    }
  });
});

// delete a project
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Project.deleteOne({ _id: id }, err => {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      res.status(204).json({ message: "The project was deleted." });
    }
  });
});

module.exports = router;
