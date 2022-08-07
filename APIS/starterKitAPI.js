require('dotenv').config()
const asyncHandler=require('express-async-handler')
const exp=require('express')
const starterAPI=exp.Router()
starterAPI.use(exp.json())
starterAPI.get('/getstarterkit',asyncHandler(async(request,response)=>{
    const starterKitCollectionObj=request.app.get("starterKitCollectionObj")
    const payload=await starterKitCollectionObj.find().toArray()
    response.send({message:"Data Fetched..",payload:payload})
}))
module.exports=starterAPI;