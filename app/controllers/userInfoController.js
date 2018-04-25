'use strict';

//var mongoose = require('mongoose'),
//	user = mongoose.model('User');

//TODO: Complete with actual magic
exports.getUserInfo = function(req, res) {
	console.log("[userInfo]"+req.params.userId);
	res.json(req.params.userId);
	};
