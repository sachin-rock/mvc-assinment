
const express = require("express")

const connect = require("./configs/db")
const app = express()
app.use(express.json())

const submissioncontroller = require("./controllers/submission.controller")
const evaluationcontroller = require("./controllers/evaluation.controller")
const usercontroller = require("./controllers/user.controller")
const studentcontroller = require("./controllers/student.controllers")
const batchcontroller = require("./controllers/batch.controller")
app.use("/users",usercontroller)
app.use("/students",studentcontroller)
app.use("/batches",batchcontroller)
app.use("/evaluations",evaluationcontroller)
app.use("/submissions",submissioncontroller)
app.listen(5000,async()=>{
  try{
      await connect()
  }
  catch(err){
      console.log(err.message)
  }
  console.log("listening")
})
