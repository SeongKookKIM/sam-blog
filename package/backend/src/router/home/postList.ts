import express, { Request, Response } from "express";
import db from "../../utils/mongoData";

let postList = express.Router();
postList.use(express.json());

// 메인 주제 추가
postList.get("/", async (req: Request, res: Response) => {
  try {
    const result = await db!.collection("post").find().toArray();

    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(403).send("PostList 데이터가 없습니다.");
    }
  } catch {
    return res.status(403).send("PostList 데이터를 불러올 수 없습니다.");
  }
});

export default postList;
