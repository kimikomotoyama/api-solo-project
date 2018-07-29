const express = require("express");
const app = express();
const knex = require("./config.js")();
const path = require("path");

//declare require files
const index = require("./route/index")(knex);
const recipes = require("./route/recipes/index")(knex);

//declare app.use functions
app.use('/', index);
app.use('/recipes/', recipes);
// app.use(express.static("layout"));
app.use(express.static("public"));
app.use(express.static("resources"));
app.use(express.static("view"));

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});