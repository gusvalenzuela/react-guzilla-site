const router = require("express").Router();
const projectRoutes = require("./projects");
const mailRoutes = require("./sendmail");

// Project routes
router.use("/projects", projectRoutes);

// route for sending mail via form in contact page
router.use("/sendmail", mailRoutes);

module.exports = router;
