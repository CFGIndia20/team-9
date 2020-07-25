const express = require("express")
const admin = require("firebase-admin")
const firebase = require("firebase-functions")
const Multer = require("multer")

const app = express.Router()

const multer = Multer({
    storage: Multer.memoryStorage()
})

app.post("/dailyUpdate", (req, res) => {
    admin.firestore().collection("users").get().then((docs) => {
        res.send("" + docs.size)
    })
})

app.get('/admin/assign/', (req, res) => {
    var users = [];
    let ref = admin.firestore();
    ref.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            var user = {};
            user.id = doc.id;
            user.name = data.name;
            user.availability = data.timeAvail
            users.push(user);
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