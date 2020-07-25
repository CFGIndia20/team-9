const  express = require("express")
const admin = require("firebase-admin")
const firebase = require("firebase-functions")
const Multer = require("multer")

const app = express.Router()

app.post("/signUp",async (req,res)=>{

    const phoneNo = req.body.phoneNo
    const passwd = req.body.password

    if(phoneNo===undefined||passwd===undefined){
        res.send({
            "status":"error",
            "error":"invalid params"
        })
        return
    }


    const users =  await admin.firestore().collection("users").where("phoneNo","==",phoneNo).get()
    users.forEach((_)=>{
        res.send({
            "status":"error",
            "error":"user already guess"
        })
        return
    })

    admin.firestore().collection("users").add({"phoneNo":phoneNo,"password":passwd}).then((doc)=>{
        res.send({
            "status":"success",
            "uid":doc.id
        })
    }).catch((err)=>{
        res.send({
            "status":"error"
        })
    })



})

app.post("/login",async (req,res)=> {

    const phoneNo = req.body.phoneNo
    const passwd = req.body.password

    if(phoneNo===undefined||passwd===undefined){
        res.send({
            "status":"error",
            "error":"invalid params"
        })
        return
    }

    const users = await admin.firestore().collection("users").where("phoneNo", "==", phoneNo)
        .where("password", "==", passwd).get()
    if (users.size === 0) {
        res.send({
            "status": "error",
            "error": "Invalid details"
        })
        return
    }

    users.forEach((user)=>{
        res.send({
            "status":"success",
            "uid":user.id
        })
    })

})
app.post("/userInfo",(req,res)=>{
    const messaging =admin.firestore();
    var user = {
            balance:0,
            location:req.body.location,
            name:req.body.name,
            role:req.body.role,
            timeAvail:req.body.timeAvail,
        };
        messaging.collection("users").add(user)
    .then((result) => {
        console.log(result);
        res.send({ "status":"success",
        "url":JSON.stringify(user)});
    }).catch(function(error) {
        console.log('Error:', error);
        res.send({
            "status":"error",
            "error":"userInfo error"
        })
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
        userSnapshot.ref().update({ timeAvail: req.body.timeAvail }).then((result) => {
            console.log(result);
            res.send({ "status":"success"});
        });
        }
        if(req.body.location!=null){
            userSnapshot.ref().update({ location: req.body.location });
            }
    }).catch((err)=>{
        res.send({
            "status":"error",
            "error":"update profile error"
        })
    });
});
})
app.post("/setSkillsRole",(req,res)=>{
    const ref =admin.firestore()
    var query = ref.collection("users").orderByChild("name").equalTo(req.body.name);
query.once("value", function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        if(req.body.skills!=null && req.body.role!=null){
        userSnapshot.ref().update({ skills: req.body.skills, role:req.body.role }).then((result) => {
            console.log(result);
            res.send({ "status":"success"})});
        }
    }).catch((err)=>{
        res.send({
            "status":"error",
            "error":"set skills and role error"
        })
    });
});
})

app.get('/tasks',(req,res)=>{
    let ref = admin.firestore();
    var tasks =[]
   
    ref.collection("tasks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        var task = {};
        task.id= doc.id;
        task.name = data.name;
        task.desc = data.desc;
        tasks.push(task);
    })
        console.log(tasks);
        return res.status(200).json(tasks);
    })
    
})

app.get('/homework',(req,res)=>{
    let ref = admin.firestore();
    var tasks =[]
   
    ref.collection("submissions").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        let data = doc.data();
        var task = {};
        task.id= doc.id;
        task.name = data.name;
        task.desc = data.desc;
        tasks.push(task);
    })
        console.log(tasks);
        return res.status(200).json(tasks);
    })
    
})

module.exports = app