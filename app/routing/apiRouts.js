//Dependencies
var path = require("path");
// friends in friends.js
var friends = require("../data/friends.js");
// Export API routes
module.exports = function(app) {
	// entire listof friends
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});
	// adding a new friend
	app.post("/api/friends", function(req, res) {
		var userData = req.body;
		var userRes = userData.scores;
		var matchName = "";
		var matchImg = "";
		var totalDiff = 10000;
		// loop through friends 
		for (var i = 0; i < friends.length; i++) {
			var diff = 0;
			// loop through each question and find diff
			for (var j = 0; j < userRes.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userRes[j]);
			}
			if (diff < totalDiff) {
				totalDiff = diff;
				matchName = friends[i].name;
				matchImg = friends[i].photo;
			}
		}
		friends.push(userData);
		res.json({ status: "OK", matchName: matchName, matchImg: matchImg });
	});
};