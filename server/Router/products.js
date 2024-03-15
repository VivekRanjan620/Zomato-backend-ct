const express = require("express");
const Product = require("../models/product");
const router = express.Router();

//SEND THE PRODUCTS DETAILS IN THE server

router.get("/product", async (req, res) => {
  try {
    let product = await Product.find();
    if(!product) return res.send("product not found")

    else{
      return res.send(product)
    }
  } catch {
      res.send(errr)
  }
});

router.post('/product',async(req,res)=>{
    try{
       let product=await Product(req.body)
       await product.save()
       return res.send({product, msg:"done"})
    }catch{
     res.send("errr")
    }
})

module.exports=router