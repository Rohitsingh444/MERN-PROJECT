const mongoose = require('mongoose');

const addproduct2 = new mongoose.Schema({
    
    name:{
        type:String,
        require:true

    },
    file:{
        type: Buffer,
        require:true

    },
    price:{
        type: Number,
        require:true

    },
    description:{
        type:String,
        require:true

    }
  
});

const AddProduct2 = mongoose.model("AddProduct2",addproduct2)
module.exports = AddProduct2;