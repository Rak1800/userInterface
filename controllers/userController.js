const userModel = require("../Models/userModel")

const registerUser= async (req,res)=>{
    try{
const data=req.body
// deStructure 
const {name,gender,age,mobile,email,password,address}=data 

// validation requirment field
if(!name) return res.status(400).send({status:false,message:"name is required"})
if(!gender) return res.status(400).send({status:false,message:"gender is required"})
if(!age) return res.status(400).send({status:false,message:"age is required"})
if(!mobile) return res.status(400).send({status:false,message:"mobile is required"})
if(!email) return res.status(400).send({status:false,message:"email is required"})
if(!password) return res.status(400).send({status:false,message:"password is required"})
if(!address) return res.status(400).send({status:false,message:"address is required"})

//check unique
const emailcheck = await userModel.findOne({email:email})
if(emailcheck ) return res.status(400).send({status:false,message:"email is already exist"})
const mobilecheck = await userModel.findOne({mobile:mobile})
if(mobilecheck ) return res.status(400).send({status:false,message:"email is already exist"})

// create user

const saveData = await userModel.create(data)

return res.status(201).send({status:true,message:"register successful", saveData})
    }catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

const loginUser = async (req,res)=>{
    try{
    const data= req.body
    const {mobile,email,password}=data
    if(!email ) {return res.status(400).send({status:false,message:"email is required"})}
// }else if(!mobile){
//     return res.status(400).send({status:false,message:"mobile is required"})
//     }
    if(!password) return res.status(400).send({status:false,message:"password is required"})

    const checkUser = await userModel.findOne({email:email,password:password})
    if(!checkUser) return  res.status(400).send({status:false,message:"user not registered "})

    return res.status(200).send({satus:true,message:"login successful", data:checkUser})
    }catch(error){
      res.status(500).send({status:false,message:error.message})
    }
}

module.exports={registerUser,loginUser}