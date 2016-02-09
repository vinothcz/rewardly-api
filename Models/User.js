var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema( 
{ 
	user_id: Number,
	user_name: String,
	first_name: String,
	last_name: String,
	contact: {
		phone: String,
		email: String
	},
	currently_active: Number,
	last_login: String
});

var User = mongoose.model('user', userSchema);

module.exports = User;