const express = require("express");

const app = express();
const port = process.env.PORT || 2000;

app.get("/", (req, res) => {
  res.send("hello backend world, user management server coocking...");
});

const users = [
  {
    id: 1,
    name: "miraj",
    email: "miraj@gmail.com",
  },
  {
    id: 2,
    name: "siraj",
    email: "siraj@gmail.com",
  },
  {
    id: 3,
    name: "riraj",
    email: "riraj@gmail.com",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log("user manage server running...", port);
});
