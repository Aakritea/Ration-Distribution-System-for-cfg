require('dotenv').config()
const asyncHandler=require('express-async-handler')
const exp=require('express')
const regularAPI=exp.Router()
regularAPI.use(exp.json())
regularAPI.get('/getregularkit',asyncHandler(async(request,response)=>{
    const regularKitCollectionObj=request.app.get("regularKitCollectionObj")
    const payload=await regularKitCollectionObj.find().toArray()
    response.send({message:"Data Fetched..",payload:payload})
}))
module.exports=regularAPI;