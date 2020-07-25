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
        res.send("ok");
    }).catch(function(error) {
        console.log('Error unsubscribing from topic:', error);
      });
})

app.post("/updateAvailability",(req,res)=>{
    const ref =admin.firestore()
    var query = ref.collection("users").orderByChild("name").equalTo(req.body.name);
query.once("value", function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        userSnapshot.ref().update({ timeAvail: req.body.timeAvail });
    });
});
})



module.exports = app