
import express from "express"
import {home,about, adddata, subdata, registration, senddata, getregdata, deletedata, updateform, update} from "../controller/routecontroller.js"
const routes=express.Router()
routes.get("/",home)
   
routes.get("/about",about)
routes.get("/adddata",adddata)
routes.post("/subdata",subdata)
routes.get("/regitration",registration)
routes.post("/senddata",senddata)
routes.get("/getregdata",getregdata)
routes.post("/showreg/delete/:id",deletedata)
routes.get("/showreg/updateform/:id",updateform)
routes.post("/showreg/update/:id",update)

   
export default  routes