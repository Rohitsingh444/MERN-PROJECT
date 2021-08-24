// npm init
// npm install express nodemon mongoose dotenv cors
var jwt = require('jsonwebtoken');
var checkAuth = require("./tokenAuth")
const express = require('express')
const app = express()
// const cors=require('cores');
const mongoose= require('mongoose');
// app.use(cors());
app.use(express.json());
const Signup =require('./Database');
const Signin =require('./Database2');
const AddProduct =require('./Database3');
const AddProduct2 =require('./Database4');
const { update } = require('./Database');
const DB = "mongodb://localhost:27017/FrontendDatabase"
 mongoose.connect(DB,{ useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false })
 .then(()=>console.log("database successfully connected"))
 .catch((err)=>console.log(err));

// app.use(require('./Route'));
// app.get("/",(req,res) => {
//     res.send("express")
// })


// app.post('/frontendsignin',(req,res) =>{
//     console.log(req.body);
//     const user = new Signin(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
   
// })

//  post Signin data to database
app.post('/frontendsignin',async(req,res) =>{
   
    
    try{
        const user = new Signin(req.body);
        const createuser =await user.save();
        var token=jwt.sign(
            {
                email: user.email,
                password:user.password
            },
            'secret',{
                expiresIn:'1h'
            }
        );
       
        res.status(200).json({
            message:"User found",
            createuser,
            token:token
        });
    }
    catch(e){
        res.status(400).send(e);
    }
    
})
app.get('/frontendsignin',async(req,res) =>{
    try{
    const sign = await Signin.find();
    res.send(sign);
    }
    catch(e){
        res.send(e);
    }  
})

// Indevidual data
app.get('/frontendsignin/:id',async(req,res) =>{
    try{
    const _id = req.params.id;
    const si= await Signin.findById({_id:_id});
    res.send(si);
}
catch(e){
    res.status(500).send(e);
}  
})

 // register data into database
app.post('/frontend',async(req,res)=>
{

    try{
        const register = new Signup(req.body);
        const regUser =await register.save();
        res.status(201).send(regUser);
        console.log(regUser)
    }
    catch(e){
        res.status(400).send(e);
    }  
});

// post addproduct data to database
// ,checkAuth
app.post('/productdetails',async(req,res) =>{
    try{
        console.log(req.userData);
        const product = new AddProduct(req.body);
        const p1 =await product.save();
        res.status(201).send(p1);
        console.log(p1)
    }
    catch(e){
        res.status(400).send(e);
    
    }
})

app.get('/productdetails',async(req,res) =>{
    try{
    const product = await AddProduct.find();
    res.send(product);
    }
    catch(e){
        res.send(e);
    }  
})
app.post('/newproductdetails',async(req,res) =>{
    try{
        const product2 = new AddProduct2(req.body);
        const p2 =await product2.save();
        res.status(201).send(p2);
        console.log(p2)
    }
    catch(e){
        res.send(e);
    }  
})

// updata prodct by id

// app.patch("/Updateproduct/:id", async(req,res)=>{
//     try{
//  const _id =req.params.id;
//  const updataproduct = await AddProduct.findByIdAndUpdate(_id)
//     }
//     catch(e){
//         res.status(400).send(e);
//     }
// })
// // Delete API
app.delete("/deleteproduct/:id",async(req,res)=>{
    try{
        const deleteProduct = await AddProduct.findByIdAndDelete(req.params.id);
       if(!req.params.id){
           return res.status(400).send();
       }
       res.send(deleteProduct);
    }
    catch(e){
        res.status(500).send(e);
    }
})
app.listen(4000,() => {
    console.log("server is running")
})









