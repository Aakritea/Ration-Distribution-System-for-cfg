require('dotenv').config()
const asyncHandler=require('express-async-handler')
const bcrypt=require('bcryptjs')
const exp=require('express')
const jwt=require('jsonwebtoken')
const adminAPI=exp.Router()
adminAPI.use(exp.json())
adminAPI.post('/login',asyncHandler(async(request,response)=>{
    const adminCollectionObj=request.app.get("adminCollectionObj")
    userObj=request.body
    console.log(userObj)
    let tempObj=await adminCollectionObj.findOne({username:userObj.username});
    if(tempObj===null){
        response.send({message:"Invalid users"})
    }
    else{
        // const status=await bcrypt.compare(userObj.password,tempObj.password)
        if(userObj.password!==tempObj.password){
            response.send({message:"Invalid password"})
        }
        else{
            let token=jwt.sign({username:userObj.username},''+process.env.SECURITY,{expiresIn:60})
            response.send({message:"Login success",payload:token,userdata:tempObj})
        }
    }
}))
module.exports=adminAPI;