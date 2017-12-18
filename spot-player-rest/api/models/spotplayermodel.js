var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
name :{
type : String,
required: 'Kindly enter the name of taks'
},
Full_Name:{
	type:String,
	required:'Kindly enter the full name'
},
Date_of_birth :{
	type: Date,
	default: Date.now
},
No_Of_Matches:{
	type: Number,
	default:100
},
Centuries:{
	type:Number,
	default:35
}
});

module.exports = mongoose.model('players',taskSchema);
