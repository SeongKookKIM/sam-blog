//db 연결
import * as mongoDB from "mongodb";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

export let db: mongoDB.Db;

const options: mongoDB.MongoClientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  poolSize: 10,
  connectTimeoutMS: 30000,
};

new MongoClient(
  process.env.MONGO || (process.env.MONGODB_URI as string),
  options,
)
  .connect()
  .then((client) => {
    console.log("db연결");
    db = client.db("blog");
  })
  .catch((err) => console.log(err));
