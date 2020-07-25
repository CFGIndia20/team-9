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

module.exports = app