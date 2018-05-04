'use strict';

const express = require('express');
const passport = require('passport');
var mongoose = require('mongoose');

let User = require('../models/UserModel');

exports.loginUser = function(req, res) {
	console.log("[userLogin]" + req.body);
	res.json(req.body);

	const email = req.body.email;
	const password = req.body.password;

	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('password', 'Password is required').notEmpty();

	passport.authenticate('local', {
		successRedirect:'/',
		failureRedirect:'/users/login',
		failureFlash: true
	})(req, res, next);
};
