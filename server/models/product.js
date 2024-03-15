const mongoose=require("mongoose");
let productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    image:{
        type:String
    }
});

let product = mongoose.model("product",productSchema);
module.exports=product;