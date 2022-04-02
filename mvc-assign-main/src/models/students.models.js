const mongoose = require("mongoose")
const StudentSchema = new mongoose.Schema({
    rollid : {type:Number,required:true},
    currentbatch: {type:String,required:true},
},{
    timestamp:true
})
const students = mongoose.model("student",StudentSchema)
module.exports = students;