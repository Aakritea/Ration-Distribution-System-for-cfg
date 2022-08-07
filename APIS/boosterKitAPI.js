require('dotenv').config()
const asyncHandler=require('express-async-handler')
const exp=require('express')
const boosterAPI=exp.Router()
boosterAPI.use(exp.json())
boosterAPI.get('/getboosterkit',asyncHandler(async(request,response)=>{
    const boosterCollectionObj=request.app.get("boosterCollectionObj")
    const payload=await boosterCollectionObj.find().toArray()
    response.send({message:"Data Fetched..",payload:payload})
}))
module.exports=boosterAPI;