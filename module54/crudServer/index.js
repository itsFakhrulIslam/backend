const express = require("express");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

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

    // database and collection create here

    // users
    const testUserDB = client.db("testUserDB");
    const testUserCollection = testUserDB.collection("testUsers");

    // products
    const productsDB = client.db("productsDB");
    const productsCollection = productsDB.collection("products");

    // this area database relateds, and all database apis operation here
    app.post("/users", async (req, res) => {
      console.log("user saving cocking..");

      const userData = req.body;
      console.log(userData);

      const userResultData = await testUserCollection.insertOne(userData);
      console.log(userResultData);
      res.send(userResultData);
    });

    // for products area
    app.post("/products", async (req, res) => {
      console.log("product saving cocking..");

      const newProduct = req.body;
      console.log(newProduct);

      const productResult = await productsCollection.insertOne(newProduct);
      console.log(productResult);
      res.send(productResult);
    });

    // data disply area
    // for user
    app.get("/users", async (req, res) => {
      const getUsers = testUserCollection.find();
      const userArr = await getUsers.toArray();
      res.send(userArr);
    });

    // dynamically user find
    app.get("/users/:id", async (req, res) => {
      console.log("user id hitted", req.params.id);

      const userDetailId = req.params.id;

      const query = { _id: new ObjectId(userDetailId) };

      const detailResult = await testUserCollection.findOne(query);

      res.send(detailResult);
    });

    // for products
    app.get("/products", async (req, res) => {
      const getProducts = productsCollection.find();
      const productArr = await getProducts.toArray();
      res.send(productArr);
    });

    // data delete area
    //for users
    app.delete("/users/:id", async (req, res) => {
      console.log("users deleted");

      console.log(req.params.id);

      const userDeleteId = req.params.id;

      const query = {
        _id: new ObjectId(userDeleteId),
      };

      const deleteResult = await testUserCollection.deleteOne(query);

      res.send(deleteResult);
    });

    //for products
    app.delete("/products/:id", async (req, res) => {
      console.log("products deleted");

      console.log(req.params.id);

      const productDeleteId = req.params.id;

      const query = {
        _id: new ObjectId(productDeleteId),
      };

      const deleteResult = await productsCollection.deleteOne(query);

      res.send(deleteResult);
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
