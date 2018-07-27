const express = require("express");
const app = express();
const router = express.Router();

const index = require("./routers/index");


app.use('/', index);

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});