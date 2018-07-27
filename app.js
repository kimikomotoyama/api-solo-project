const express = require("express");
const app = express();
const router = express.Router();

//declare require files
const index = require("./route/index");

//declare app.use functions
app.use('/', index);
app.use('/recipes/', index);

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});