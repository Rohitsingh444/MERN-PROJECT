// npm init
// npm install express nodemon mongoose dotenv cors

const express = require('express')
const app = express()
const cors=require('cores');
const mongoose= require('mongoose');
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/ForntendDatabase",{ useNewUrlParser: true ,useUnifiedTopology: true })
.then(()=>console.log("database successfully connected"))
.catch((err)=>console.log(err));
app.use("/",require('../Route'));

app.listen(4000,()=>{console.log("server is running")})









