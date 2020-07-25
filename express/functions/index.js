const functions = require('firebase-functions');
const admin = require("firebase-admin");

const express = require("./express");

admin.initializeApp();

exports.Express =  functions.https.onRequest(express)


exports.attendance = functions.firestore.document("attendance/{attendanceId}")
    .onCreate((data,context)=>{
        let documentData = data.data();
        const compensation = documentData.compensation
        if(compensation>0) {
            let promises = []
            documentData.availUser.forEach((userId) => {
                promises.push(
                    admin.firestore().collection(`users/${userId}/transactions`)
                        .add({"amount": compensation, "desc": "meeting compensation", time: new Date().getTime()})
                )
                promises.push(
                    admin.firestore().doc(`users/${userId}`).get().then((userDoc) => {
                        return userDoc.ref.set({"balance": userDoc.data().balance + compensation}, {merge: true})
                    })
                )
            })
            return Promise.all(promises).then(console.log).catch(console.log)
        }else{
            return Promise.resolve();
        }
});

exports.work = functions.firestore.document("work/{workId}").onCreate((data,cont)=>{
    const user = data.data().userId;
    if(user === undefined)
        return Promise.resolve()
    const taskId = cont.params.workId;
    return admin.firestore().doc(`users/${user}`).update({"tasks":admin.firestore.FieldValue.arrayUnion(taskId)})


})