// const arr = []
// let id = 1;

import User from"../model/user.js"
import Reg from"../model/register.js"
function home(req, res) {
    res.render("home")
}
function about(req, res) {
    res.render("about")
}
function adddata(req, res) {
    res.render("adddata")
}


const subdata=async(req,res)=>{
    let name=req.body.name
    let email=req.body.email
    await User.create({name,email})
    res.redirect("/")
}
function registration(req,res){
    res.render("registration")
}
const senddata=async(req,res)=>{
    let name=req.body.name
    let email=req.body.email
    let number=req.body.number
    let password=req.body.password
    let cpass=req.body.cpass
    await Reg.create({name,email,number,password,cpass})
    res.redirect("/")
}
const getregdata= async(req,res)=>{
    const regdata= await Reg.find()
    res.render("showreg",{regdata})
}
const deletedata=async(req,res)=>{
    await  Reg.findByIdAndDelete(req.params.id)
    res.redirect("/getregdata")
}
const updateform=async(req,res)=>{
   const d= await Reg.findById(req.params.id)
    res.render("update",{d})
}
const update=async(req,res)=>{
   await Reg.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/getregdata")
}

export { home, about, adddata, subdata,registration,senddata,getregdata,deletedata,updateform ,update}