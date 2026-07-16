const express = require("express");

const { MongoClient, ServerApiVersion } = require("mongodb");

const dns = require("node:dns").promises;
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const cors = require("cors");

const app = express();
const port = process.env.PORT || 2030;

// middleware
app.use(cors());
app.use(express.json());

// s9U6uo7o5zvNSuI4
const uri =
  "mongodb+srv://crudAppServer:s9U6uo7o5zvNSuI4@crudapp.rsibkyv.mongodb.net/?appName=crudApp";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("hello! crud server is running...");
});

async function run() {
  try {
    await client.connect();

    // this area database relateds, and all database apis operation here
    app.post("/users", (req, res) => {
      console.log("user saving cocking..");

      const userData = req.body;
      console.log(userData);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("server is going on", port);
});
