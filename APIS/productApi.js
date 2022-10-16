
const exp=require('express');
const productApp=exp.Router();
productApp.use(exp.json())

productApp.post('/createproduct',(request,response)=>{
   //let productCollectionObject=request.app.get("productCollectionObj");
   let productobj=request.body;
   console.log(productobj)
});
module.exports=productApp;