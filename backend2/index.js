// npm init
// npm install express nodemon mongoose dotenv cors

const express = require('express')
const app = express()
// const cors=require('cores');
const mongoose= require('mongoose');
// app.use(cors());
app.use(express.json());

const DB = "mongodb://localhost:27017/FrontendDatabase"
 mongoose.connect(DB,{ useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false })
 .then(()=>console.log("database successfully connected"))
 .catch((err)=>console.log(err));

app.use(require('./Route'));
app.get("/",(req,res) => {
    res.send("express")
})
app.listen(4000,() => {
    console.log("server is running")
})









