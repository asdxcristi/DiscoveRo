'use strict';

module.exports = function(app){
	var userInfoController = require('../controllers/userInfoController');

	app.route('/user/info/:userId')
	.get(userInfoController.getUserInfo);
};
