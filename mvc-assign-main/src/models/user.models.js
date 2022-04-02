const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstname : {type:String,required:true},
    lastname : {type:String,required:true},
    gender : {type:String,required:true},
    dateofbirth : {type:String,required:true},
    type : {type:String,required:true}
},
{
    timestamp:true
})
const users = mongoose.model("user",UserSchema)

module.exports = users;