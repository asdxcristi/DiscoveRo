'use strict';

//var mongoose = require('mongoose'),
//	user = mongoose.model('User');

//TODO: Complete with actual magic
exports.updateUserProfile = function(req, res) {
	console.log("[userProfileUpdate]"+req.body);
	res.json(req.body);
	};
