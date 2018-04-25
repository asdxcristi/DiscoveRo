'use strict';

//var mongoose = require('mongoose'),
//	user = mongoose.model('User');

//TODO: Complete with actual magic
exports.loginUser = function(req, res) {
	console.log("[userLogin]"+req.body);
	res.json(req.body);
	};
