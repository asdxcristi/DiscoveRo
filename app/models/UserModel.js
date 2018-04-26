const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	friend_list: [String],
	profile_pic: Buffer,
	travel_history: [[]],
	current_journey: [String]
});

const User = module.exports =
mongoose.model('UserModel', UserSchema);