const mongoose = require("mongoose")


const SubmissionSchema = new mongoose.Schema({
    evaluationid : {type:mongoose.Schema.Types.ObjectId,ref:"evaluation",required:true},
    studentsid:  {type:mongoose.Schema.Types.ObjectId,ref:"student",required:true},
    marks: {type:Number,required:true},
},{
    timestamp:true
})
const submissions = mongoose.model("submissions",SubmissionSchema)
module.exports = submissions;