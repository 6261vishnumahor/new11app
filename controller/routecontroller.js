// const arr = []
// let id = 1;

import User from"../model/user.js"
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

export { home, about, adddata, subdata }