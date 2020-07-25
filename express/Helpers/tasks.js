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

app.get('/admin/assign/', (req, res)=>{
    var users = [];
    const ref =admin.firestore();
    ref.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            var user={};
            user.id=doc.id;
            user.name = data.name;
            user.availability = data.timeAvail
            users.push(user);
        })
        console.log(users);  
        return res.status(200).json(users);
    })

 });




module.exports = app