var express = require('express');
var router = express.Router();
const fs = require('fs').promises;

router.get('/main', function (req, res) {
  res.render('/admin/main')
})


module.exports = router;
