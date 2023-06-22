const { default: mongoose } = require("mongoose");

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports= new mongoose.model("User",UserSchema)