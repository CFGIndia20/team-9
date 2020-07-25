const  express = require("express")
const admin = require("firebase-admin")
const firebase = require("firebase-functions")
const Multer = require("multer")

const app = express.Router()

const multer = Multer({
    storage : Multer.memoryStorage()
})

app.post("/dailyUpdate",(req,res)=>{
    admin.firestore().collection("users").get().then((docs)=>{
        res.send(""+docs.size)
    })
})



module.exports = app