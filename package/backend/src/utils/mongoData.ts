//db 연결
import * as mongoDB from "mongodb";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

export let db: mongoDB.Db;

new MongoClient(
  process.env.MONGO as string,
  { useNewUrlParser: true, useUnifiedTopology: true } as mongoDB.ConnectOptions,
)
  .connect()
  .then((client) => {
    console.log("db연결");
    db = client.db("blog");
  })
  .catch((err) => console.log(err));
