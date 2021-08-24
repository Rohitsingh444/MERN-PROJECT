const mongoose = require('mongoose');

const addproduct = new mongoose.Schema({
    
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

const AddProduct = mongoose.model("AddProduct",addproduct)
module.exports = AddProduct;