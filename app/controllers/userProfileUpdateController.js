'use strict';

const express = require('express');
var mongoose = require('mongoose');

let User = require('../models/UserModel');

const email = req.body.email;
const password = req.body.password;

req.checkBody('email', 'Email cannot be empty').notEmpty();
req.checkBody('email', 'Email is not valid').isEmail();
req.checkBody('password', 'Password cannot be empty').notEmpty();

exports.updateUserProfile = function(req, res) {
	console.log("[userProfileUpdate]" + req.body);
	res.json(req.body);

	Model.findOne({ email: email }, function (err, user_to_update){
		user_to_update.email = req.body.email;
		user_to_update.password = req.body.password;
		user_to_update.save();
	});
};
