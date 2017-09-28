// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;
//Sets up middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
//Public directory access
app.use(express.static(path.join(__dirname, "./app/public")));
//App routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

//Starts listening on PORT
app.listen(PORT, function() {
	console.log("Friend-Finder app is listening on port", PORT);
});