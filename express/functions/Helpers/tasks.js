const  express = require("express")
const admin = require("firebase-admin")
const firebase = require("firebase-functions")
const Multer = require("multer")
const googleStorage = require("@google-cloud/storage")


const storage = new googleStorage.Storage({projectId:"cfg2020-dca44" ,keyFilename:"./admin.json"})


const bucket = storage.bucket("gs://cfg2020-dca44.appspot.com");


const app = express.Router()

const multer = Multer({
    storage : Multer.memoryStorage()
})


app.post("/dailyUpdate",multer.single("upload-file"),async (req,res)=>{
    console.log(req.body)
    debugger;
    const file = req.file
    const taskId = req.body.taskId;
    const desc = req.body.description;

    if(taskId===undefined){
        res.send({
            "status":"error",
            "error":"invalid params"
        })
        return
    }

    admin.firestore().collection(`work/${taskId}/updates`).add({
        "desc":desc || "Not provided",
        "timeStamp":new Date().getTime()
    }).then((doc)=>{
        const updateId = doc.id
        if (file!==undefined){
            uploadImage(file,updateId).then((url)=>{
                res.send({
                    "status":"success",
                    "url":url
                })
                admin.firestore().doc(`work/${taskId}/updates/${updateId}`).set({"url":url},{merge:true})
            }).catch((err)=>{
                console.log("error "+JSON.stringify(err))
                res.send({
                    "status":"error",
                    "error":"upload file failed"
                })
                doc.delete()
            })
        }else {
            res.send({
                "status":"success",
                "url":"no file found"
            })
        }
    })

app.get('/admin/assign/', (req, res) => {
    var users = [];
    let ref = admin.firestore();
    var ids = req.body.userId;
    ref.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            for(id of ids){
                if(id==doc.id){
                    let data = doc.data();
                    var user = {};
                    user.id = doc.id;
                    user.name = data.name;
                    user.availability = data.timeAvail
                    users.push(user);
                }
            }
           
        })
        console.log(users);
        return res.status(200).json(users);
    })

});

app.post('/admin/assign/task', (req, res) => {
    let ref = admin.firestore();
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            console.log(req.body[key]);
            ref.collection("work").add(req.body[key]).then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
            }).catch(function (error) {
                    console.error("Error adding document: ", error);
            });
        }
    }
    return res.status(200).json('Task Assigned to Users');

})

const uploadImage=(file,fileName)=>{
    return new Promise((resolve, reject) => {
        if (!file) {
            reject('No image file');
        }

        let fileUpload = bucket.file(fileName);

        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        });

        blobStream.on('error', (error) => {
            console.log(error)
            reject('Something is wrong! Unable to upload at the moment.');
        });

        blobStream.on('finish', () => {

            const url = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
            resolve(url);
        });

        blobStream.end(file.buffer);
    });
}

app.post("/attendance",(req,res)=>{
    let availUser = req.body.availUsers
    const compensation = req.body.compensation
    let task = req.body.tasks



    if(availUser===undefined||compensation===undefined||task === undefined){
        res.send({
            "status":"error",
            "error":"invalid params"
        })
        return
    }

    // task = task.split(",")
    // availUser = availUser.split(",")

    admin.firestore().collection("attendance").add({
        "availUser":availUser,
        "compensation":compensation,
        "task":task
    }).then((_)=>{
        res.send({"status":"success"})
        if(compensation>0){
            let promises = []
            availUser.forEach((userId)=>{
                promises.push(
                    admin.firestore().collection(`users/${userId}/transactions`)
                        .add({"amount":compensation,"desc":"meeting compensation",time:new Date().getTime()})
                )
                promises.push(
                    admin.firestore().doc(`users/${userId}`).get().then((userDoc)=>{
                        return userDoc.ref.set({"balance":userDoc.data().balance+compensation},{merge:true})
                    })
                )
            })
            Promise.all(promises).then(console.log).catch(console.log)
        }

    }).catch((err)=>{
        res.send({"status":"error"})
    })

})

})

app.post('/admin/assign/homework', (req, res) => {
    let ref = admin.firestore();
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            console.log(req.body[key]);
            ref.collection("submissions").add(req.body[key]).then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
            }).catch(function (error) {
                    console.error("Error adding document: ", error);
            });
        }
    }
    return res.status(200).json('Homework Assigned to Users');
})
module.exports = app