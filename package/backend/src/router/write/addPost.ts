import express, { Request, Response } from "express";
import db from "../../server";

let addPost = express.Router();
addPost.use(express.json());

// 타이틀 메인,서브 타이틀 찾은 후 목록 추가
addPost.post("/", async (req: Request, res: Response) => {
  try {
    const result = await db!.collection("post").insertOne(req.body);

    if (result) {
      return res.status(200).send("포스터를 저장하였습니다.");
    } else {
      return res.status(403).send("포스터 데이터 저장에 실패하였습니다.");
    }
  } catch {
    return res.status(403).send("데이터를 찾을 수 없습니다.");
  }
});

export default addPost;
