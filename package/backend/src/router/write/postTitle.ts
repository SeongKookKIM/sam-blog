import express, { Request, Response } from "express";
import { db } from "../../utils/mongoData";

let postTitle = express.Router();
postTitle.use(express.json());

// 타이틀 메인,서브 타이틀 찾은 후 목록 추가
postTitle.get("/", async (req: Request, res: Response) => {
  try {
    const result = await db.collection("subject").find().toArray();

    return res.status(200).json(result);
  } catch {
    return res.status(403).send("데이터를 찾을 수 없습니다.");
  }
});

export default postTitle;
