import mongoose from "mongoose";
const regschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required: true,
        uniqu:true
    },
    number:{
        type:String,
        required:true,
        uniqu:true
    },
    password:{
        type:String,
        required:true,
    },
    cpass:{
        type:String,
        required:true
    }
})

export default mongoose.model("Reg",regschema)
