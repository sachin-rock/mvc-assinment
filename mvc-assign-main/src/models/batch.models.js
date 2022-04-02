const mongoose = require("mongoose")
const BatchSchema = new mongoose.Schema({
    batchname: {type:String,required:true},
    studentsid: {type:mongoose.Schema.Types.ObjectId,ref:"student",required:true}
},{
    timestamp:true
}) 
const batchs = mongoose.model("batch",BatchSchema)
module.exports = batchs;