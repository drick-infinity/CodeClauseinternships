const mongoose = require("mongoose");
const Schema = mongoose.Schema

const submitSchema = new mongoose.Schema({
    comment: {type: String},
    commentId:{type:Schema.Types.ObjectId,ref:"comment"},
    createdBy:{type:Schema.Types.ObjectId,ref:"user"} 
})
//collection

const Submit = new mongoose.model('Submit', submitSchema)
data=[{comment:"hello! Can you tell me from which course I learned Data Science?"},
       {comment:"hello! Can you tell me from which course I learned web development?"},
       {comment:"hello! Can you tell me from which course I learned machine learning?"}]
Submit.insertMany(data);

module.exports = Submit;