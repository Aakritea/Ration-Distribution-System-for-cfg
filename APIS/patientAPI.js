require('dotenv').config()
const asyncHandler=require('express-async-handler')
const exp=require('express')
const patientAPI=exp.Router()
patientAPI.use(exp.json())
patientAPI.get('/getpatient',asyncHandler(async(request,response)=>{
    const patientCollectionObj=request.app.get("patientCollectionObj")
    const payload=await patientCollectionObj.find().toArray()
    response.send({message:"Data Fetched..",payload:payload})
}))

patientAPI.post("/add-patient",asyncHandler(async (request, response) => {
      const patientCollectionObj = request.app.get("patientCollectionObj");
      let newUser = request.body;
      let tempUser = await patientCollectionObj.findOne({
        username: newUser.username,
      });
      if (tempUser !== null) {
        response.send({
          message: "The username already exist..please choose another..",
        });
      } 
      
      else {
        let hashedPassword = await bcrypt.hash(newUser.password, 5);
        newUser.password = hashedPassword;
        await patientCollectionObj.insertOne(newUser);
        response.send({ message: "User Created successfully..." });
      }
    })
  );
module.exports=patientAPI;