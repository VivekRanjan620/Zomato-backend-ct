const express = require("express");
let router = express.Router();
let Restaurant = require("../models/restaurant");

router.post("/restro", async (req, res) => {
  console.log(req.body, "rfwef");
  try {
    let restaurant = new Restaurant(req.body);

    await restaurant.save();
    res.send({ restaurant, msg: "done" });
  } catch {
    res.send("err");
  }
});

//ALL RESTAURANT FIND
router.get("/restro", async (req, res) => {
  try {
    let restaurant = await Restaurant.find(req.params.id);
    if (!restaurant) {
      return res.send("not found");
    } else {
      return res.send(restaurant);
    }
  } catch {
    return res.send("err");
  }
});


router.patch('/restro/:id', async(req,res)=>{
  try{
     let restaurant=    await  Restaurant.findByIdAndUpdate(req.params.id, req.body, {new:true})
     if(!restaurant){
      return res.send('not found')
     }
     else{
      return res.send(restaurant)
     }

  }
  catch{
      res.send('errr')
  }


});

router.delete("/restro/:id", async (req, res) => {
  try {
    let restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) {
      return res.send("not found");
    } else {
      return res.send("deleted");
    }
  } catch {
    res.send("err");
  }
});

module.exports = router;
