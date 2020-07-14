const db = require("../models");
const LocalProjects = require("./seed.js");

// Defining methods for the ProjectsController
module.exports = {
  findAll: function (req, res) {
    res.json(LocalProjects.projectsSeed);
    // db.Project
    //   .find(req.query)
    //   .sort({ ranking: 1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Project.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
