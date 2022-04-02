const express = require("express")
const app = express.Router()
const submissions = require("../models/submission.model")
app.get("",async(req,res)=>{
    try{
       const data = await submissions.find().lean().exec()
       return res.send(data)
    }catch(err){
        console.log(err.message)
        return res.send(err.message)
    }
})
app.get("/:id",async(req,res)=>{
  try{
     const data = await submissions.find({evaluationid:req.params.id},{_id:0,evaluationid:0,marks:0,__v:0}).lean().exec()
     return res.send(data)
  }catch(err){
      console.log(err.message)
      return res.send(err.message)
  }
})
app.get("/highest/find",async(req,res)=>{
  try{

     const data = await submissions.findOne().populate("studentsid").sort({marks:-1}).lean().exec()
     return res.send(data)
  }catch(err){
      console.log(err.message)
      return res.send(err.message)
  }
})
app.post("",async(req,res)=>{
  try{
    const data = await submissions.create(req.body)
    return res.send(data)
  }
  catch(err){
      return res.send(err.message)
  }
})
module.exports = app