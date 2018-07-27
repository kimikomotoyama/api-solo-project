const express = require("express");
const app = express();
const router = express.Router();

router.get('/', function (req, res) {
  res.send('list all recipes');
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