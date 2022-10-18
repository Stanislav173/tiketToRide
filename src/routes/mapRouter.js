var express = require('express');
var router = express.Router();

router.get('/name', function (req, res) {
  //controller
  res.send('Some map');
})


module.exports = router;
