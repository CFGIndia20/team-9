const  express = require("express")
const admin = require("firebase-admin")
const firebase = require("firebase-functions")
const adminJson = require("./admin.json")// download this json from firebase service accounts panel
const bodyParser = require("body-parser")


const helper_tasks = require("./Helpers/tasks")


if (!module.parent){
    admin.initializeApp({
        credential: admin.credential.cert(adminJson),
        databaseURL: "https://cfg2020-dca44.firebaseio.com"
    });
}

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())


app.use("/tasks",helper_tasks)

app.use("/",(req,res)=>{
    res.send("This works")
})


if (!module.parent){
    app.listen(5000,()=>{
        console.log("listening")
    });
}

module.exports = app