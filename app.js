const express = require("express");
const app = express();
const knex = require("./config.js")();

//declare require files
const index = require("./route/index")(knex);
const recipes = require("./route/recipes/index")(knex);

//declare app.use functions
app.use('/', index);
app.use('/recipes/', recipes);

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});