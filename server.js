
const exp=require('express');

const app=exp();
const path=require('path')
const dburl="mongodb+srv://vnr2019:vnr2019@rakesh123.llzwh.mongodb.net/?retryWrites=true&w=majority"
const mclient=require("mongodb").MongoClient;
app.use(exp.static(path.join(__dirname,'./build')))
mclient.connect(dburl)
.then((client)=>{
    let dbobj=client.db("vnr2019db");
    let userCollectionObj=dbobj.collection("usercollection");
    let productCollectionObj=dbobj.collection("productcollection");
    app.set("userCollectionObj",userCollectionObj);
    app.set("productCollectionObj",productCollectionObj)
    console.log("connection sucessfull")})
.catch(err=>console.log("error",err))

const userApp=require('./APIS/userApi');
const productApp=require('./APIS/productApi');
app.use('/user-api',userApp);
app.use('/productapi',productApp);
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})

//handling invalid urls


app.use((request,response,next)=>{
   response.send({message:`Path ${request.url} is invalid`})
})


//handling syntax errors
app.use((error,request,response,next)=>{
    response.send({reason:`${error.message}`})
})

//assign port numbers
app.listen(4000,()=>console.log("server created"))