const express = require("express");
const app = express();
const router = express.Router();
const root = '.'

module.exports = (knex) => {
  router.get('/', function (req, res) {
    res.sendFile('/view/index.html', {root: root});
  });
  return router;
}
