var express = require('express');
var router = express.Router();

var Pusher = require('pusher');
var secrets = require('../config/secrets');

var pusher = new Pusher({
	appId: secrets.pusher_id,
	key: secrets.pusher_key,
	secret: secrets.pusher_secret
});

var cheets = [
	{
		author: "Jamie Patel",
		body: "Hello World"
	}
]

router.get('/', function(req, res) {
  res.json(cheets);
});

router.post('/', function(req, res){
	pusher.trigger('cheets', 'new-cheet', {cheet: req.body.cheet})
});

module.exports = router;
