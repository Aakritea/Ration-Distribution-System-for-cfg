require('dotenv').config()
const asyncHandler=require('express-async-handler')
const exp=require('express')
const inventoryAPI=exp.Router()
inventoryAPI.use(exp.json())
inventoryAPI.get('/getinventory',asyncHandler(async(request,response)=>{
    const inventoryObj=request.app.get("inventoryObj")
    const payload=await inventoryObj.find().toArray()
    response.send({message:"Data Fetched..",payload:payload})
}))
module.exports=inventoryAPI;