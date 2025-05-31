
import express from "express"
import {home,about, adddata, subdata} from "../controller/routecontroller.js"
const routes=express.Router()
routes.get("/",home)
   
routes.get("/about",about)
routes.get("/adddata",adddata)
routes.post("/subdata",subdata)

   
export default  routes