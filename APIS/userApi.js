const exp=require('express');
const useApp=exp.Router();


 
const asynchandler=require('express-async-handler');
 //users data
const bcryptjs=require('bcryptjs');

const jwt=require('jsonwebtoken')
useApp.use(exp.json())

var cloudinary=require("cloudinary").v2;
const {CloudinaryStorage}=require("multer-storage-cloudinary");
const multer=require("multer");
  

cloudinary.config({
  cloud_name:"dzttx3q8o",
  api_key:"514174269116196",
  api_secret:"6yl9kBqiwhfBxG24EbWYKeWVzEg",
  secure:true,
});
 const Storage=new CloudinaryStorage({
   cloudinary:cloudinary,
   params:async(req,file)=>{
     return{
       folder:"vnr2023",
       public_id:fieldname+"-"+Date.now(),
     };
   },
 });

 var upload=multer({storage:Storage});


 useApp.post('/create-user',upload.single("photo"),asynchandler(async(request,response)=>{
   //console.log(request.file.path);
    let userCollectionObject=request.app.get("userCollectionObj");
    let bodyuser=JSON.parse(request.body.userObj);
    let newuser=await userCollectionObject.findOne({username:bodyuser.username})
    if(newuser!=null)
    {
    response.send({message:"user already exist"})
    }
    else{
        //console.log("Hi");
          let hashedpswd= await bcryptjs.hash(bodyuser.password,1);
          //console.log(hashedpswd)
          bodyuser.password=hashedpswd;
        //console.log(bodyuser);
        bodyuser.profileImg=request.file.path;
          await userCollectionObject.insertOne(bodyuser);
          response.send({message:"user inserted"});
    }
 }));

 useApp.post('/login',asynchandler(async(request,response)=>{
  
    let userCollectionObject=request.app.get("userCollectionObj");
    let bodyuser=request.body;
    console.log(bodyuser)
    let userobj=await userCollectionObject.findOne({username:bodyuser.username})
    if(userobj==null){
        response.send({message:"invalid user"})
    }
    else{

       let status= await bcryptjs.compare(bodyuser.password,userobj.password);
       if(status==false)
       {
           response.send({message:"invalid password"})
       }
       else{
           let token=jwt.sign({username:userobj.username},'abcdef',{expiresIn:60})
           //console.log(token)
           response.send({message:"success",payload:token,userObj:userobj})
       }
   }

 }));

//Get users data
// useApp.get('/getusers',asynchandler(async(request,response)=>{
//       let userCollectionObject=request.app.get("userCollectionObj");
//       let users=await userCollectionObject.find().toArray()
//     response.send({message:"all users",payload:users})
// }));
  

// //get user data by id

// useApp.get('/getuser/:id',asynchandler(async(request,response)=>{
//     let userid=(+request.params.id);
//     let userCollectionObject=request.app.get("userCollectionObj");
//     let user=await userCollectionObject.findOne({id:userid})
//      if(user==null){
//          response.send({message:"user not found"})
//      }
//      else{
//          response.send({message:"user",payload:user})
//      }
    

// }));


// //add the user data
// useApp.post('/create-user',async(request,response)=>{
    
//     let userCollectionObject=request.app.get("userCollectionObj");
//     let newuser=request.body;
//    let result=await  userCollectionObject.insertOne(newuser);
//    response.send({message:"user inserted"})
//     //console.log(newuser)
//     // users.push(newuser);
//     // response.send({message:"User created"})
// });
 

// //update the user data

// useApp.put('/update-user',asynchandler(async(request,response)=>{
//     let updateuser=request.body;
//     let userCollectionObject=request.app.get("userCollectionObj");
//     await userCollectionObject.update({id:updateuser.id},{$set:{...updateuser}})
//     response.send({message:"user updated"})
   
// }));


// //delete the user data

// useApp.delete('/delete-user/:id',asynchandler(async(request,response)=>{
//     let userid=(+request.params.id);
//     let userCollectionObject=request.app.get("userCollectionObj");
//    await userCollectionObject.deleteOne({id:userid})
//     response.send({message:"user deleted"})
  
// }));
module.exports=useApp;