require('dotenv').config()
const asyncHandler=require('express-async-handler')
const exp=require('express')
const exitAPI=exp.Router()
exitAPI.use(exp.json())
exitAPI.get('/getexitkit',asyncHandler(async(request,response)=>{
    const exitKitCollectionObj=request.app.get("exitKitCollectionObj")
    const payload=await exitKitCollectionObj.find().toArray()
    response.send({message:"Data Fetched..",payload:payload})
}))
module.exports=exitAPI;