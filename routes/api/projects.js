const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/projects"
router
  .route("/")
  .get(projectsController.findAll)

// Matches with "/api/projects/:id"
router.route("/:id").get(projectsController.findById);

module.exports = router;
