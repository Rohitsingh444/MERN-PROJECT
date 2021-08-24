const express=require('express');
 const router=express.Router();

const Signup =require('./Database');
const Signin =require('./Database2');
const AddProduct =require('./Database3');
// router.route("/data").post((req,res)=>{
//     const name= req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const newdata= new FrontendData({name, email, password })
//      });
//        
//        
//    
//
// FrontendData.save();

// router.get('/',(req,res)=>
// {
//     res.send('hello rohit');
// });
router.post('/frontend',(req,res)=>
{
    console.log(req.body);
    // res.json({message: req.body});
        

    const { name, email, password}  = req.body;
    const frontendData = new Signup({name, email, password})
    frontendData.save();
    
});
router.post('/frontendsignin',(req,res)=>
{
    const { email,password}=req.body;
    const frontendData2 = new Signin({ email, password})
    frontendData2.save();
});
router.post('/productdetails',(req,res)=>
{
    const { name,price,description}=req.body;
    const frontendData3 = new AddProduct({ name,price,description})
    frontendData3.save();
});
router.get('/product',(req,res,next)=>
{
    // const { name,price,description}=req.body;
    // const frontendData3 = new AddProduct({ name,price,description})
   AddProduct.find()
   .then(result=>{
       res.status(200)
       .json({data:result});
   })
   .catch(err=>{
       console.log(err);
       res.status(500).json({
           error: err
       })
   })
    console.log(req.body);
    frontendData3.save();
});
module.exports = router;