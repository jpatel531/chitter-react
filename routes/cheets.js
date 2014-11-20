var express = require('express');
var router = express.Router();

var cheets = [
	{
		author: "Jamie Patel",
		body: "Hello World"
	}
]

router.get('/', function(req, res) {
  res.json(cheets);
});

module.exports = router;
