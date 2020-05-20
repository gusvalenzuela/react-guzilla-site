const router = require("express").Router();
const projectRoutes = require("./projects");

// Project routes
router.use("/projects", projectRoutes);

module.exports = router;
