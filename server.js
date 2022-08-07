const exp=require('express') //express module returns a function.
const adminAPI=require('./APIS/adminAPI')
const boosterKitAPI=require('./APIS/boosterKitAPI')
const exitKitAPI=require('./APIS/exitKitAPI')
const inventoryAPI=require('./APIS/inventoryAPI')
const patientAPI=require('./APIS/patientAPI')
const regularKitAPI=require('./APIS/regularKitAPI')
const starterKitAPI=require('./APIS/starterKitAPI')
const volunteerAPI=require('./APIS/volunteerAPI')
// import dotenv
require('dotenv').config()
//creating the server...
const app=exp()
//import path for connecting..
const path=require('path')

//connecting back-end

app.use(exp.static(path.join(__dirname,'./build')))

//creating a mongoclient..
const mdbClient=require('mongodb').MongoClient
//Database connection...
const Database="mongodb+srv://poorna_1307:<password>@poorna.zv57ipv.mongodb.net/?retryWrites=true&w=majority";
//calling connect method on mongoclient with database url
mdbClient.connect(Database)
    .then((client)=>{
        //get DB object
        let dbObj=client.db("team-92DB");
        //get collections
       let volunteerCollectionObj= dbObj.collection("volunteers collection");
       let adminCollectionObj=dbObj.collection("admin collection");
       let boosterCollectionObj=dbObj.collection("booster kit collection");
       let exitKitCollectionObj=dbObj.collection("exit kit collection");
       let patientCollectionObj=dbObj.collection("patient collection");
       let regularKitCollectionObj=dbObj.collection("regular kit collection");
       let starterKitCollectionObj=dbObj.collection("starter kit collection");
       let inventoryObj=dbObj.collection("inventory collection");
       //sharing collection objs with apis
       app.set("volunteerCollectionObj",volunteerCollectionObj)
       app.set("adminCollectionObj",adminCollectionObj)
       app.set("boosterCollectionObj",boosterCollectionObj)
       app.set("exitKitCollectionObj",exitKitCollectionObj)
       app.set("patientCollectionObj",patientCollectionObj)
       app.set("regularKitCollectionObj",regularKitCollectionObj)
       app.set("starterKitCollectionObj",starterKitCollectionObj)
       app.set("inventoryObj",inventoryObj)
       console.log("Database connected successfully")
    })
    .catch(err=>console.log("Error occured in DB",err))
app.use('/volunteer-api',volunteerAPI)
app.use('/admin-api',adminAPI)
app.use('/booster-api',boosterKitAPI)
app.use('/exit-api',exitKitAPI)
app.use('/inventory-api',inventoryAPI)
app.use('/patient-api',patientAPI)
app.use('/regular-api',regularKitAPI)
app.use('/starter-api',starterKitAPI)
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})
const port=process.env.PORT || 4003
app.listen(port,()=>console.log(`Server listening on port ${port}...`))

app.use((request,response,next)=>{
    response.send({message:`The path ${request.url} is invalid..`})
})
app.use((error,request,response,next)=>{
    response.send({message:`Error Occured`,reason:error.message})
})
