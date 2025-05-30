const express=require("express")
const port=require("./config/envconfig.js")
const routes=require("./route/router.js")
const app=express();

app.use(routes)
// app.get("/",(req,res)=>{
//     res.send("thi is a home")
// }) 
// app.get("/about",(req,res)=>{
//     res.send("this is a about page")
// })

app.listen(port,(req,res)=>{
    console.log("the runing port is 3000")
})