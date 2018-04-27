var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var userInfoRoute = require('./routes/userInfoRoute');
userInfoRoute(app);

var userLoginRoute = require('./routes/userLoginRoute');
userLoginRoute(app);

var userRegisterRoute = require('./routes/userRegisterRoute');
userRegisterRoute(app); 

var userProfileUpdateRoute = require('./routes/userProfileUpdateRoute');
userProfileUpdateRoute(app);

var mapObjectivesRoute = require('./routes/mapObjectivesRoutes');
mapObjectivesRoute(app);

app.listen(port);

console.log("Server started on port: " + port);
