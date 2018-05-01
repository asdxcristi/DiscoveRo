'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
var mongoose = require('mongoose');

let User = require('../models/UserModel');

exports.registerUser = function(req, res) {
	console.log("[userRegister]" + req.body);
	res.json(req.body);

	const email = req.body.email;
	const password = req.body.password;
	const password_conf = req.body.password_conf;

	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password_conf', 'Passwords do not match').equals(req.body.password);

	let errors = req.validationErrors();

	if(errors){
		res.render('register', {
		  errors:errors
		});
	} else {
		let newUser = new User({
		  email:email,
		  password:password
		});

		bcrypt.genSalt(10, function(err, salt){
			bcrypt.hash(newUser.password, salt, function(err, hash){
				if(err){
				  console.log(err);
				}
			    newUser.password = hash;
			    newUser.save(function(err){
					if(err){
						console.log(err);
						return;
					} else {
						req.flash('success','Registration successful!');
						res.redirect('/users/login');
					}
			    });
			});
		});
	}
};
