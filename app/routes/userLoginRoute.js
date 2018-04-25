'use strict';

module.exports = function(app){
	var userLoginController = require('../controllers/userLoginController');

	app.route('/user/login')
	.post(userLoginController.loginUser);
};
