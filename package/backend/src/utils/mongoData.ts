import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

let db;

try {
  const client = new MongoClient(process.env.MONGODB_URI ?? "");

  client.connect();

  db = client.db("blog");

  if (db) {
    console.log("db연결");
  }
} catch {
  console.log("db error");
}

export default db;
