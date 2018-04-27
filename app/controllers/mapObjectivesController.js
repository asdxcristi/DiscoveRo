'use strict';

//var mongoose = require('mongoose'),
//	user = mongoose.model('ObjectiveModel');

//TODO: Complete with actual magic
exports.getAllMapObjectivesInfo = function(req, res) {
	console.log("[getAllMapObjectivesInfo]");
	res.json("[getAllMapObjectivesInfo]");
	};

exports.putMapObjective = function(req, res) {
	console.log("[putMapObjective]"+req.body);
	res.json(req.body);
	};

exports.getMapObjectiveInfo = function(req, res) {
	console.log("[getMapObjectiveInfo]"+req.params.objectiveId);
	res.json(req.params.objectiveId);
	};
