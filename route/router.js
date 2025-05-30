const express=require("express")
const {home,about}=require("../controller/routecontroller.js")
const routes=express.Router()
routes.get("/",home)
   
routes.get("/about",about)
   
module.exports=routes