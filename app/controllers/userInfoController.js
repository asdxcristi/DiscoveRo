'use strict';

var mongoose = require('mongoose');
const express = require('express');

let User = require('../models/UserModel');

exports.getUserInfo = function(req, res) {
	console.log("[userInfo]" + req.params.userId);
	res.json(req.params.userId);

    var account = User.findOne({ email: req.params.userId}, function (err, user) {
	    if (err) {
	        req.flash('failure','No account found!');
	        console.log(err);
	        return;
	    }

	    return account;
})
};
