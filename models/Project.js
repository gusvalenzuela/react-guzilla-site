const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    default: "App image",
  },
  version: {
    type: String,
    default:`1.0.0`,
  },
  lead: {
    type: String,
    default: "Brief description",
  },
  libraries: {
    type: String,
    default: "[enter libraries used]",
  },
  description: {
    type: String,
    default: "Full description",
  },
  app_url: {
    type: String,
    default: "https://url.com",
  },
  repo_url: {
    type: String,
    default: "https://urlForRepo.com",
  },
  img_src: {
    type: String,
    default: "default.png",
  },
  img_alt: {
    type: String,
    default: "App image",
  },
  dateEntered: {
    type: Date,
    default: Date.now(),
  },
  omit: {
    type: Boolean,
    default: false,
  },
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
