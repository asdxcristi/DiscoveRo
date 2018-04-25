'use strict';

module.exports = function(app){
	var userRegisterController = require('../controllers/userRegisterController');

	app.route('/user/register')
	.post(userRegisterController.registerUser);
};
