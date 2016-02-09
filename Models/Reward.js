var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rewardSchema = new Schema( 
{
    user_recieved: [ 
        Number
    ],
    type : String,
    user_awarded: [ 
        Number
    ],
    points : String
});

var rewards = mongoose.model('reward', rewardSchema);

module.exports = rewards;