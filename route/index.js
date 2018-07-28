const express = require("express");
const app = express();
const router = express.Router();
const root = '.'

router.get('/', function (req, res) {
  res.sendFile('/view/index.html', {root: root});
});

module.exports = router;