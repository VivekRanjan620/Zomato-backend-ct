const express = require("express");
let mongoose = require("mongoose");
let restroRouter = require("./Router/restaurant");
let ProductRouter=require("../server/Router/products")

mongoose.connect("mongodb://127.0.0.1:27017/zomato")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
let app = express();
app.use(express.json({extended:false}));

app.use("/api", restroRouter);
app.use("/api",ProductRouter);

app.listen(7000, () => {
  console.log("server started");
});
