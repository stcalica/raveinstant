var express = require('express');
var router = express.Router();
var uuid = require('uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rave Instant' });
});


router.post('/order', function(){
	//set order in model
	//generate uuid
	//save order

});

module.exports = router;
