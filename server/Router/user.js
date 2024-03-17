let express = require("express");
let router = express.Router();
let user = require("../model/userdb");
let bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  let data = await user.findOne({ email: req.body.email });
  if (data) {
    return res.end("user already exist");
  } else {
    let newPassword = await bcrypt.hash(req.body.password, 5);
    console.log(newPassword);

    let userData = new UserActivation({
      name: req.body.name,
      email: req.body.email,
      passWord: newPassword,
    });
    await userData.save();
    res.send({ userData, msg: "created" });
  }
});

module.exports=router