const  express = require("express")
const admin = require("firebase-admin")
const firebase = require("firebase-functions")
const Multer = require("multer")

const app = express.Router()


app.post("/userInfo",(req,res)=>{
    const messaging =admin.firestore();
    var user = {
        balance:0,
        location:req.body.location,
        name:req.body.name,
        role:req.body.role,
        timeAvail:req.body.timeAvail,
        };
        messaging.collection("users").push(user)
    .then((result) => {
        console.log(result);
        res.send(JSON.stringify(user));
    }).catch(function(error) {
        console.log('Error unsubscribing from topic:', error);
      });
})

// app.post("/updateAvailability",(req,res)=>{
//     const ref =admin.firestore()
//     var query = ref.collection("users").orderByChild("name").equalTo(req.body.name);
// query.once("value", function(snapshot) {
//     snapshot.forEach(function(userSnapshot) {
//         if(req.body.timeAvail!=null){
//         userSnapshot.ref().update({ timeAvail: req.body.timeAvail });
//         }
//     });
// });
// })
app.post("/updateProfile",(req,res)=>{
    const ref =admin.firestore()
    var query = ref.collection("users").orderByChild("name").equalTo(req.body.name);
query.once("value", function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        if(req.body.timeAvail!=null){
        userSnapshot.ref().update({ timeAvail: req.body.timeAvail });
        }
        if(req.body.location!=null){
            userSnapshot.ref().update({ location: req.body.location });
            }
    });
});
})
app.post("/setSkillsRole",(req,res)=>{
    const ref =admin.firestore()
    var query = ref.collection("users").orderByChild("name").equalTo(req.body.name);
query.once("value", function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        if(req.body.skills!=null && req.body.role!=null){
        userSnapshot.ref().update({ skills: req.body.skills, role:req.body.role });
        }
    });
});
})



module.exports = app