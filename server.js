const PORT = process.env.PORT || 3008;
const express = require("express");
const mongoose = require("mongoose");
const logger = require(`morgan`);
const cors = require(`cors`);
const compression = require(`compression`);
const routes = require("./routes");
const app = express();

require("dotenv").config();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(compression());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_OWN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the API server
app.listen(PORT, function () {
  console.log(`=====> API Server now listening on PORT ${PORT}!`);
});
