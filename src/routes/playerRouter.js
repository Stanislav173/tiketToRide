var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Player home page');
})


//router.get('/about', playerController.player_list)

module.exports = router;
