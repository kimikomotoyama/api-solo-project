const express = require("express");
const app = express();
const router = express.Router();

router.get('/', function (req, res) {
  res.send('hey there dude!');
})

module.exports = router;