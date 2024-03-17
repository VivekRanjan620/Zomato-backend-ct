const Product=require("../models/Product")

async function handleGetAllProducts(req,res){
    try{
        let product=await Product.find()
        if(!product){
            return res.send('product not found')
        }else{
            return res.send(product)
        }
    }catch{
        res.send('errr')
    }
}

async function handleGetProductById(req,res){
    try{
        let product=await Product.findById(req.params.id)
        if(product){
            return res.send(product)
        }else{
            return res.send('product not found')
        }
        
    }catch{
        res.send('error')
    }

}


async function handleCreateProduct(req,res){
    try{
        let product=await Product(req.body)
        await product.save()
        return res.send({product, msg:"done"})
    }catch{
        res.send('errrr')
    }
}


async function handleUpdateProductById(req,res){
    try{
        let update=await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(update){
            return res.send('update')
        }else{
            return res.send('product not found')
        }
    }catch{
        res.send('error')
    }
}


async function handleDeleteProductById(req,res){
    try{
        let product=await Product.findByIdAndDelete(req.params.id)
        if(product){
            return res.send('product deleted')
        }else{
            return res.send('product not found')
        }
    }catch{
        res.send('error')
    }
}

module.exports={
    handleCreateProduct,
    handleDeleteProductById,
    handleUpdateProductById,
    handleGetAllProducts,
    handleGetProductById
}