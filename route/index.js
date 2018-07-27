const express = require("express");
const app = express();
const router = express.Router();

//declare require files
const recipes = require("./recipes/index");

//declare app.use functions
app.use('/', recipes);

module.exports = app;