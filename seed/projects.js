const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config()

// This file empties the Projects collection and inserts the projects below
console.log(process.env.MONGODB_OWN)
mongoose.connect(process.env.MONGODB_OWN,
  { useNewUrlParser: true, useUnifiedTopology: true });

const projectsSeed = [
  {
    "title": "Gooder Burger",
    "ranking": 6,
    "version": "3.0.10",
    "lead": "An app that dynamically uses Node.js (w/ Express & Handlebars) and mySQL to virtually create burgers and move them from uneaten to eaten lists.",
    "libraries": "NodeJS, Handlebars, MySQL, CSS",
    "description": "Do you get hungry? Are you human? Well if so, you probably enjoy a good burger. Allow me to introduce you to an even better burger; a Gooder Burger. From a classic cheeseburger to a meatless wonder, all burgers are welcomed to consume with Gooder Burger. I am Willy Wonka and you are Charlie. Please, go ahead and imagine the best burger your desire can conjure. Simply use your imagination, create a name for your burger, and add it to the burgers' list. After doing so, you may DEVOUR IT! That's it. All there is to it. Enjoy.",
    "app_url": "https://great-burger-app.herokuapp.com/",
    "repo_url": "https://github.com/gusvalenzuela/great-burger-tracker-app",
    "repo_name": "great-burger-tracker-app",
    "img_src": "gooder-burger-1.jpg",
    "img_alt": "Screenshot of application",
    "omit": false,

  },
  {
    "title": "Password Generator",
    "ranking": 4,
    "version": "1.2.1",
    "lead": "A plain string generator with user options",
    "libraries": "JS, HTML, CSS",
    "description": "In this day and age password security is very important and having unique passwords for all accounts is best practice. In order to facilitate this practice, my password generator randomly picks from a \"pool\" of lower case, upper case, special case, and/or number characters and dynamically creates a string - \"password\" - of 8 to 128 characters long (the longer the better!). You can then take this newly created \"password\" and use it as you wish. Enjoy!",
    "app_url": "https://gusvalenzuela.github.io/pswd-generator/",
    "repo_url": "https://github.com/gusvalenzuela/pswd-generator",
    "repo_name": "pswd-generator",
    "img_src": "password-gen-1.jpg",
    "img_alt": "Screenshot of application",
    "omit": false,
  },
  {
    "title": "Hungry Hip-Po's",
    "ranking": 8,
    "version": "1.11.23",
    "lead": "A grocery list builder from recipe search. Search by cuisine, ingredient, or meal.",
    "libraries": "JS, HTML, CSS",
    "description": "",
    "app_url": "https://gusvalenzuela.github.io/Hungry-Hippos-GRV/",
    "repo_url": "https://github.com/gusvalenzuela/Hungry-Hippos-GRV",
    "repo_name": "Hungry-Hippos-GRV",
    "img_src": "hungry-hippos-1.jpg",
    "img_alt": "Screenshot of application",
    "omit": false,
  },
  {
    "title": "QuizDown\u2049",
    "ranking": 1,
    "version": "5.0.0",
    "lead": "A timed quiz game with multiple quizzes to choose from.",
    "libraries": "JS, MongoDB, HTML, CSS",
    "description": "",
    "app_url": "https://quiz-down.herokuapp.com/",
    "repo_url": "https://github.com/gusvalenzuela/quiz-game",
    "repo_name": "quiz-game",
    "img_src": "quizdown-1.jpg",
    "img_alt": "Screenshot of application",
    "omit": false,
  },
  {
    "title": "artGarden",
    "ranking": 7,
    "version": "0.33.4",
    "lead": "A site where users can make requests for artworks to be made and other users can make a proposal to fulfill that request.",
    "libraries": "NodeJS, Handlebars, MySQL, CSS",
    "description": "artGarden™ is for new artists who have trouble breaking into the art sphere. artGarden gives equal opportunity for paid gigs to new and established artists by allowing them to connect to potential clients through a unique bidding platform. Unlike other gig marketplace platforms, artGarden allows any registered artist to view and bid on user art commissions, giving the client the ability to set the price point while also giving lesser known artists a chance at taking on a commission that otherwise might not be accessible.",
    "app_url": "https://artgarden.herokuapp.com/",
    "repo_url": "https://github.com/gusvalenzuela/art-garden-bc",
    "repo_name": "art-garden-bc",
    "img_src": "artgarden-1.jpg",
    "img_alt": "Screenshot of application",
    "omit": false,
  },
  {
    "title": "Employee Yellow Pages",
    "ranking": 2,
    "version": "0.8.2",
    "lead": "Basic employee directory created with React. Given a directory of employees, a user may sort, search, and filter to quickly access employee information.",
    "libraries": "React, JS/JSX, HTML, CSS",
    "description": "",
    "app_url": "https://confident-goodall-b01ec7.netlify.app/",
    "repo_url": "https://github.com/gusvalenzuela/employee-yellow-pages-app",
    "repo_name": "employee-yellow-pages-app",
    "img_src": "employee-yp-1.jpg",
    "img_alt": "Screenshot of EYP application",
    "omit": false
  },
  {
    "title": "Weather App",
    "ranking": 5,
    "version": "1.0.0",
    "lead": "Web application for searching cities and displaying their weather data.",
    "libraries": "JS, jQuery, HTML, CSS",
    "description": "",
    "app_url": "https://gusvalenzuela.github.io/weather-youLikeIt-orNot/",
    "repo_url": "https://github.com/gusvalenzuela/weather-youLikeIt-orNot",
    "repo_name": "weather-youLikeIt-orNot",
    "img_src": "weather-app-1.jpg",
    "img_alt": "Screenshot of Weather Application",
    "omit": false
  },
  {
    "title": "Workday Planner",
    "ranking": 3,
    "version": "2.0.1",
    "lead": "A simple calendar app for scheduling your work day.",
    "libraries": "JS, Handlebars, MySQL, CSS",
    "description": "A planner displaying a typical '9-to-5' schedule in hour segments. User may enter notes into the text-area and save.",
    "app_url": "https://workdayplanner.herokuapp.com/",
    "repo_url": "https://github.com/gusvalenzuela/day-planner-bootcamp",
    "repo_name": "day-planner-bootcamp",
    "img_src": "workday-planner-1.jpg",
    "img_alt": "Screenshot of application",
    "omit": false
  }

]


db.Project.deleteMany({})
  .then(() => db.Project.collection.insertMany(projectsSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
