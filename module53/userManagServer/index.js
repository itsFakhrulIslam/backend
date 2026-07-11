const express = require("express");

const app = express();
const port = process.env.PORT || 2000;

app.get("/", (req, res) => {
  res.send("hello backend world, user management server coocking...");
});

app.listen(port, () => {
  console.log("user manage server running...", port);
});
