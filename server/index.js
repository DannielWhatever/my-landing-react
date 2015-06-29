var express = require("express");
var path = require("path");
var page = require("./page.generated.js");
var Twitter = require("twitter");

var twitterClient = new Twitter({
	consumer_key       : 'DsWFDg7QFvSKvQyjDEIuvbfL5',
	consumer_secret    : 'kR8B4k0EBFrnFWzflFHalw57sPetAAjLqyVfpvq36gPGtI5XOk',
	access_token_key   : '2755789148-QQQfRKwzA1fYBW3RQlCvPfnZlROHE7CTX8nHTLC',
	access_token_secret: 'xloT86ISqVW5koFdiYFEhUPqxmzcOtvaRJWKd4SII5A4F'
});

var app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

var stats = require("./stats.generated.json");

app.get("/", function(req, res) {
	var params = {screen_name: 'dannielwhatever',count:4};
	twitterClient.get('statuses/user_timeline', params, function(error, tweets){
		if(error) console.log(error);
		//console.log(tweets);
		res.end(page(req, stats.assetsByChunkName.main,tweets));
	});
});


var server = app.listen(process.env.PORT || 3000, function() {
	console.log('Listening on port %d', server.address().port);
});

//c2- min 39