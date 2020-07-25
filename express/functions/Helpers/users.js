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
            "error":"user already exists"
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

app.post('/tasks',(req,res)=>{
    let ref = admin.firestore();
    var tasks =[]
    var id = req.body.userId;
    console.log(id);
    ref.collection("users").doc(id).get().then(function(doc)  {
   
        if(id==doc.id){
            let data = doc.data();
            let tasks = data.tasks;
            console.log(doc.data());
           
                //console.log(task1);
                ref.collection("work").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc2) => {
                        //console.log(doc2.id);
                     for(task1 of tasks){
                        if(doc2.id==task1){
                            let data2 = doc2.data();
                            //console.log(doc2.data());
                                var task = {};
                                task.id= doc2.id;
                                task.name = data2.name;
                                task.desc = data2.desc;
                                tasks.push(task);
                                
                                return res.status(200).json(tasks);
                            }
                            
                     }
                     
                     
                    })
                })
                //console.log(tasks);
            
            
            
        }
       

        //console.log(tasks);
       
    })
    
})

app.post('/homework',(req,res)=>{

    let ref = admin.firestore();
    var tasks =[]
    var id = req.body.userId;
    console.log(id);
    ref.collection("users").doc(id).get().then(function(doc)  {
   
        if(id==doc.id){
            let data = doc.data();
            let tasks = data.homework;
            console.log(doc.data());
           
                //console.log(task1);
                ref.collection("submissions").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc2) => {
                        //console.log(doc2.id);
                    for(task1 of tasks){
                        if(doc2.id==task1){
                            let data2 = doc2.data();
                            //console.log(doc2.data());
                                var task = {};
                                task.id= doc2.id;
                                task.name = data2.name;
                                task.desc = data2.desc;
                                tasks.push(task);
                                
                                return res.status(200).json(tasks);
                            }
                            
                    }
                     
                    
                    })
                })
                //console.log(tasks);
            
            
            
        }
       

        //console.log(tasks);
       
    })
    
    
})

module.exports = app