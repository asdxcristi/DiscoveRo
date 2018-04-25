'use strict';

module.exports = function(app){
	var userProfileUpdateController = require('../controllers/userProfileUpdateController');

	app.route('/user/updateProfile')
	.post(userProfileUpdateController.updateUserProfile);
};
