const express=require('express')
 const router=express.Router();

const FrontendData =require('./Database');
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

router.get('/',(req,res)=>
{
    res.send('hello rohit');
});
router.post('/frontend',(req,res)=>
{
    //  console.log(req.body);
    // res.json({message: req.body});
        

    const { name, email, password}  = req.body;
    const frontendData = new FrontendData({name, email, password})
    frontendData.save();
});

module.exports = router;