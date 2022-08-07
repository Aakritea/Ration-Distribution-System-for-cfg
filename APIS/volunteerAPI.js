require('dotenv').config()
const asyncHandler=require('express-async-handler')
const bcrypt=require('bcryptjs')
const exp=require('express')
const jwt=require('jsonwebtoken')
const volunteerAPI=exp.Router()
volunteerAPI.use(exp.json())
volunteerAPI.post('/volunteer-api/login',asyncHandler(async(request,response)=>{
    const volunteerCollectionObj=request.app.get("volunteerCollectionObj")
    userObj=request.body
    console.log(userObj)
    let tempObj=await volunteerCollectionObj.findOne({username:userObj.username});
    console.log(tempObj)
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
module.exports=volunteerAPI;