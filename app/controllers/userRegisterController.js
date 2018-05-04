'use strict';

const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
var mongoose = require('mongoose');

var User = mongoose.model('User', User);

exports.registerUser = function(req, res) {
	console.log("[userRegister]" + req.body);
	res.json(req.body);

	const email = req.body.email;
	const password = req.body.password;

	// sanity checks
	if(!email) {
		console.log("Email is required");
		return;
	} else if (email.indexOf('@') == -1) {
		console.log("Invalid email");
		return;		
	}

	if(!password) {
		console.log('Password is required');
		return;
	}

	// create new entry
	let newUser = new User({
	  email:email,
	  password:password
	});

	// password encryption
	bcrypt.genSalt(10, function(err, salt){
		bcrypt.hash(newUser.password, salt, function(err, hash){
			if(err){
			  console.log(err);
			}
		    newUser.password = hash;
			User.count({email:email}, function (err, count) {
			  if (!count) {
			    console.log("User added successfully!");
			    newUser.save();
			  }
			  else {
			    console.log('User already exists');
			    return;
			  }
			});
		});
	});

};
