import express from "express"
import port from "./config/envconfig.js"
import routes from "./route/router.js"
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app=express();

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({express:true}))

mongoose.connect("mongodb://localhost:27017/myddaa")
.then(()=>console.log("connected this app"))
.catch(()=>console.log("the database not connected"))



app.use(routes)


// app.use(express.json()); // Parses JSON bodies
// app.use(express.urlencoded({ extended: true }));
// app.get("/",(req,res)=>{
//     res.send("thi is a home")
// }) 
// app.get("/about",(req,res)=>{
//     res.send("this is a about page")
// })

app.listen(port,(req,res)=>{
    console.log("the runing port is 3000")
})