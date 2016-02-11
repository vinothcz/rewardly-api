var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rewardSchema = new Schema( 
{
    type : String,
    points : String,
    comment : String,
    user_recieved:  {type: Schema.Types.ObjectId, ref: 'user'},
	user_awarded: {type: Schema.Types.ObjectId, ref: 'user'}
});

module.exports = mongoose.model('reward', rewardSchema);