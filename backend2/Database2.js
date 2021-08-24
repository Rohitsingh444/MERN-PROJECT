const mongoose = require('mongoose')

const signIN = new mongoose.Schema({
    
    email:{
        type:String,
        require:true

    },
    password:{
        type:String,
        require:true

    }
  
});

const Signin = mongoose.model("Signin",signIN)
module.exports = Signin;