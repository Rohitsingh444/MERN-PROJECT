const mongoose = require('mongoose')
const signup = new mongoose.Schema({
    name:{
        type: String,
        requrie:true
    },
    email:{
        type:String,
        require:true

    },
    password:{
        type:String,
        require:true

    }
  
});

const Signup = mongoose.model("Signup",signup);


module.exports = Signup;
