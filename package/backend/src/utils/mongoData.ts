import * as mongoDB from "mongodb";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

let db;

try {
  const client = new MongoClient(process.env.MONGODB_URI ?? "");

  client
    .connect()
    .then(() => {
      console.log("db연결");
      db = client.db("blog");
    })
    .catch((err) => {
      console.error("MongoDB 연결 실패:", err);
      process.exit(1);
    });
} catch {
  console.log("db error");
}

export default db;
