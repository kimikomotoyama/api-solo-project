const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const root = '.'

module.exports = (knex) => {
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true }));

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
      console.log(err);
      res.sendStatus(400);
    });
  });

  app.get('/edit', function (req, res) {
    res.sendFile('/view/recipes/edit.html', {root: root});
  });

  app.get('/delete', function (req, res) {
    res.sendFile('/view/recipes/delete.html', {root: root});
  });
  
  app.post('/edit', (req, res) => {
    if (!req.body.id) throw new Error("id required!");
    console.log(req.body);
    
    knex("recipes")
    .where('id', req.body.id)
    .update({
      title: req.body.title || data.title,
      servingSize: req.body.servingSize || data.servingSize,
      prepareTime: req.body.prepareTime || data.prepareTime
    })
    .then((data) => {
      console.log(data);
      res.send(req.body);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    })
  });

  app.post('/delete', (req, res) => {
    if (!req.body.id) throw new Error("id required!");

    knex("recipes")
    .where('id', req.body.id)
    .del()
    .then(() => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
  });

  app.post('/',  upload.array(), function (req, res, next) {
    knex("recipes")
    .insert({
      title: req.body.title,
      servingSize: req.body.servingSize,
      prepareTime: req.body.prepareTime
    })
    .then(() => {
      res.json(req.body);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
  });
  return app;
}
