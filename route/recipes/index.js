const express = require("express");
const app = express();
const router = express.Router();
const ejs = require("ejs");

const root = '.'

router.get('/', function (req, res) {
  res.sendFile('/view/recipes/index.html', {root: root});
});

router.post('/', (req, res) => {
  res.send('post ok');
});

router.patch('/', (req, res) => {
  res.send('patch ok');
});

router.delete('/', (req, res) => {
  res.delete('delete ok');
});

module.exports = router;