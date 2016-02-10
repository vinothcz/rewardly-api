var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema( 
{ 
	user_id: Number,
	user_name: String,
	first_name: String,
	last_name: String,
	phone: String,
	email: String,
	currently_active: Number,
	last_login: {type: Date, default: Date.Now},
	recieved_rewards: [{type: Schema.Types.ObjectId, ref: 'Reward'}],
	given_rewards: [{type: Schema.Types.ObjectId, ref: 'Reward'}]
});

module.exports =  mongoose.model('user', userSchema);