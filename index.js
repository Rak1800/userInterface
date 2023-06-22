const express= require("express")
const mongoose =require("mongoose")
const cors =require("cors")
const  route = require("./routes/route")

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect("mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/UsersDetails",{
    useNewUrlParser:true
}).then(()=>console.log("mongoDb is connected"))
.catch((err)=>console.log(err))

app.use("/",route)

app.listen(5000,()=>{console.log("express is running on Port "+(5000))})

