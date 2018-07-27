const express = require("express");
const app = express();
const router = express.Router();

// router.get('/', function (req, res) {
//   res.send('hey there dude!');
// })

//declare require files
const recipes = require("./recipes/index");

//declare app.use functions
app.use('/', recipes);

module.exports = app;