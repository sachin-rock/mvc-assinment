const express = require("express")
const app = express.Router()
const batch = require("../models/batch.models")
app.get("",async(req,res)=>{
    try{
       const data = await batch.find().populate("studentsid").lean().exec()
       return res.send(data)
    }catch(err){
        console.log(err.message)
        return res.send(err.message)
    }
})
app.post("",async(req,res)=>{
  try{
    const data = await batch.create(req.body)
    return res.send(data)
  }
  catch(err){
      return res.send(err.message)
  }
})
module.exports = app