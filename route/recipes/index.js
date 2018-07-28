const express = require("express");
const app = express();
// const app = express.app();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
// const knex = require("../../config.js");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

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

  app.get('/', function (req, res) {
    res.sendFile('/view/recipes/index.html', {root: root});
  });
  
  app.get('/list', (req, res) => {
    knex.select()
    .from("recipes")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send("err");
    });
  });
  
  app.post('/',  upload.array(), function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
  });

  // app.post('/', (req, res) => {
  //   console.log(req.body);
  //   res.send("post ok");
  // })
  
  app.patch('/', (req, res) => {
    res.send('patch ok');
  });
  
  app.delete('/', (req, res) => {
    res.delete('delete ok');
  });

module.exports = app;