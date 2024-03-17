
let express = require("express")
let router =express.Router()
let user = require("../models/user")
let bcrypt = require("bcrypt")


router.post('/login', async (req,res)=>{
    let loginData = await user.findOne({email:req.body.email})
    if(loginData){
        let validPassword=await bcrypt.compare(req.body.passWord,loginData.passWord)
        if(validPassword){
            res.send(loginData)
        }else{
            res.send('password invalid')
        }

    }else{
        res.send('user not found')
    }
})

module.exports=router
