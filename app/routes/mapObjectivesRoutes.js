'use strict';

module.exports = function(app){
	var mapObjectivesController = require('../controllers/mapObjectivesController');

	app.route('/mapObjectives')
	.get(mapObjectivesController.getAllMapObjectivesInfo);

	app.route('/mapObjectives/add')
	.post(mapObjectivesController.putMapObjective);

	app.route('/mapObjectives/:objectiveId')
	.get(mapObjectivesController.getMapObjectiveInfo);
};
