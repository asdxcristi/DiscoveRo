'use strict';

var mongoose = require('mongoose');
const express = require('express');
const config = require('../config/db');

mongoose.connect(config.db);
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let User = require('../models/UserModel');

exports.getUserInfo = function(req, res) {
	console.log("[userInfo]" + req.params.userId);

	User.findOne({'email': req.params.userId }, function (err, users) {
	
		if (err) {
			return handleError(err);
		} else {
			if(users) {
				console.log(users);	
				res.json(users);
			} else {
				console.log("User not found!");
			}	
		}

	})
	
};
	
