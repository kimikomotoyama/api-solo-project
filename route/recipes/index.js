const express = require("express");
const app = express();
const router = express.Router();
const ejs = require("ejs");
// const knex = require("../../config.js");

//requiring knex doesn't work, so I have to hardcode this for now. 
var knex = require('knex')({
  client: 'pg',
  port: 5432,
  connection: {
    host : '127.0.0.1',
    database : 'cookpod'
  }
});

const root = '.'

  router.get('/', function (req, res) {
    res.sendFile('/view/recipes/index.html', {root: root});
  });
  
  router.get('/list', (req, res) => {
    knex.select()
    .from("recipes")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send("error");
    });
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