const express = require("express");

const { MongoClient, ServerApiVersion } = require("mongodb");

const cors = require("cors");

const app = express();
const port = process.env.PORT || 2030;

// middleware
app.use(cors());
app.use(express.json());

// mongoDb connector here
// crudAppDb
// 9EH6NfUiosqYX5c0
const uri =
  "mongodb+srv://crudAppDb:9EH6NfUiosqYX5c0@crudapp.rsibkyv.mongodb.net/?appName=crudApp";
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
