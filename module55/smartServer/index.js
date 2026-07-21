const express = require("express");
const cors = require("cors");

const applicatioin = express();
const port = process.env.PORT || 2040;

applicatioin.get("/", (req, res) => {
  res.send("hello smart developers");
});

applicatioin.listen(port, () => {
  console.log("smart deals sever is running...", port);
});
