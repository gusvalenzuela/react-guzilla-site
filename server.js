const express = require("express");
const logger = require(`morgan`);
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const compression = require(`compression`);
const PORT = process.env.PORT || 3008;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(compression());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactguzilladb",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
