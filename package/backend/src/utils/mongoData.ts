import * as mongoDB from "mongodb";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

export let db: mongoDB.Db;

// const options: mongoDB.MongoClientOptions = {
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 10000,
//   socketTimeoutMS: 120000,
//   connectTimeoutMS: 60000,
//   poolSize: 10,
// };

// const mongoURI = process.env.MONGO || process.env.MONGODB_URI;

// if (!mongoURI) {
//   console.error("MONGODB_URI 또는 MONGO 환경 변수가 설정되지 않았습니다.");
//   process.exit(1);
// }

// 새로운 연결 문자열 형식 사용 (mongodb+srv://...)
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
