const express = require("express")
const app = express.Router()
const users = require("../models/user.models")
app.get("",async(req,res)=>{
    try{
       const data = await users.find({}).lean().exec()
       return res.send(data)
    }catch(err){
        console.log(err.message)
        return res.send(err.message)
    }
})
app.post("",async(req,res)=>{
  try{
    const data = await users.create(req.body)
    return res.send(data)
  }
  catch(err){
      return res.send(err.message)
  }
})
module.exports = app