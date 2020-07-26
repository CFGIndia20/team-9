const  express = require("express")
const admin = require("firebase-admin")
const firebase = require("firebase-functions")
const adminJson = require("./admin.json")// download this json from firebase service accounts panel
const bodyParser = require("body-parser")


const helper_tasks = require("./Helpers/tasks")
const helper_user = require("./Helpers/users")


if (!module.parent){
    admin.initializeApp({
        credential: admin.credential.cert(adminJson),
        databaseURL: "https://cfg2020-dca44.firebaseio.com"
    });
}

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use("/tasks",helper_tasks)

app.use("/user",helper_user)

app.use("/",(req,res)=>{
    res.send("This works")
})


if (!module.parent){
    app.listen(5000,()=>{
        console.log("listening")
    });
}

module.exports = app