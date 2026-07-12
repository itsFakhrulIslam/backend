const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 2000;

// middleware area
app.use(cors());
app.use(express.json());

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

app.post("/users", (req, res) => {
  console.log("form submitted");

  // store the user
  const newUser = req.body;
  console.log(newUser);
});

app.listen(port, () => {
  console.log("user manage server running...", port);
});
