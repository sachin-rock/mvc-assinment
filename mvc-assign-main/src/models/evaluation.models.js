const mongoose = require("mongoose")

const EvaluationSchema = new mongoose.Schema({
    dateofevaluation: {type:String,required:true},
    instructor : {type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    batchid : {type:mongoose.Schema.Types.ObjectId,ref:"batch",required:true}
})
const evaluations = mongoose.model("evaluation",EvaluationSchema)
module.exports = evaluations;