var express = require('express');
var router = express.Router();
const fs = require('fs').promises;

router.get('/main', function (req, res) {
  res.render("admin/main.hbs")
})


module.exports = router;
