let mongoose=require("mongoose")

let RestroSchema=   mongoose.Schema({
    name:{
        type:String,
        
    },
    address:{
        type:String,
        
    },
    description:{
        type:String
    },
    passWord:{
        type:String,
        
    },
    Contact_No:{
        type:Number
    },
    image:{
        type:String
    }
})

let Restaurant = mongoose.model("Restaurant", RestroSchema)
module.exports=Restaurant