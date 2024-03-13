const express = require("express");
let mongoose = require("mongoose");
let restroRouter = require("./Router/restaurant");

mongoose.connect("mongodb://127.0.0.1:27017/zomato")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
let app = express();
app.use(express.json());

app.use("/api", restroRouter);

app.listen(7000, () => {
  console.log("server started");
});
