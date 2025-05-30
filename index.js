import express from "express"
import port from "./config/envconfig.js"
import routes from "./route/router.js"
const app=express();

app.use(routes)
app.set("view engine","ejs")
app.use(express.static("public"))
// app.get("/",(req,res)=>{
//     res.send("thi is a home")
// }) 
// app.get("/about",(req,res)=>{
//     res.send("this is a about page")
// })

app.listen(port,(req,res)=>{
    console.log("the runing port is 3000")
})