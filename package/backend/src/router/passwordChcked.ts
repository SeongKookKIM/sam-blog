import express, { Request, Response, NextFunction } from "express";
import * as mongoDB from "mongodb";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

let passwordChcked = express.Router();
passwordChcked.use(express.json());

dotenv.config();

//db 연결
let db: mongoDB.Db;
new MongoClient(process.env.MONGO as string)
  .connect()
  .then((client) => {
    console.log("db연결");
    db = client.db("blog");
  })
  .catch((err) => console.log(err));

passwordChcked.post("/", async (req: Request, res: Response) => {
  try {
    const result = await db
      .collection("isChecked")
      .insertOne({ password: req.body.password });

    console.log(result ? "저장성공!~" : "저장 실패 ㅠ");

    result ? res.status(201).send("저장") : res.status(500).send("서버에러");
  } catch (err) {
    console.log(err);
  }
});

export default passwordChcked;
