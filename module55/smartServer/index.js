const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const applicatioin = express();
const port = process.env.PORT || 2040;

// NOTE: Using standard mongodb:// URI to avoid SRV DNS issues on this network.
// For production/Atlas best practice, can switch to mongodb+srv:// when DNS is stable.
const uri =
  "mongodb://smartDealsDb:BAo57p4QHpKCQFfM@ac-gxh4w60-shard-00-00.rsibkyv.mongodb.net:27017,ac-gxh4w60-shard-00-01.rsibkyv.mongodb.net:27017,ac-gxh4w60-shard-00-02.rsibkyv.mongodb.net:27017/?ssl=true&replicaSet=atlas-vflvht-shard-0&authSource=admin&appName=crudApp";

// middleware
applicatioin.use(cors());
applicatioin.use(express.json());

applicatioin.get("/", (req, res) => {
  res.send("hello smart developers");
});

applicatioin.get("/products", (req, res) => {
  res.send();
});

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    // create db with collection area
    const smartDB = client.db("smartDatabase");
    const productsCollections = smartDB.collection("products");

    // database/crud operation apis area
    applicatioin.post("/products", async (req, res) => {
      // new products create
      const newProduct = req.body;
      const createdResult = await productsCollections.insertOne(newProduct);
      res.send(createdResult);
    });

    applicatioin.delete("/products/:id", (req, res) => {
      // product delete
      const productId = req.params.id;
      const query = { _id: new ObjectId(productId) };
      const deleteResult = productsCollections.deleteOne(query);
      res.send();
    });

    // database connect with logging area
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

applicatioin.listen(port, () => {
  console.log("smart deals sever is running...", port);
});
