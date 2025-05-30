
import express from "express"
import {home,about, adddata} from "../controller/routecontroller.js"
const routes=express.Router()
routes.get("/",home)
   
routes.get("/about",about)
routes.get("/adddata",adddata)

   
export default  routes