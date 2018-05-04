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


	var account = User.find({ 'email': req.params.userId }, function (err, users) {
	  if (err) return handleError(err);

	  console.log((users));

	  res.

	  // 'athletes' contains the list of athletes that match the criteria.
	})
	//console.log(account);

	
};
	
