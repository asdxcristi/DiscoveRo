'use strict';

//var mongoose = require('mongoose'),
//	user = mongoose.model('User');

//TODO: Complete with actual magic
exports.registerUser = function(req, res) {
	console.log("[userRegister]"+req.body);
	res.json(req.body);
	};
