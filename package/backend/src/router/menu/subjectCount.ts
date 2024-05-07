import express, { Request, Response } from "express";
import db from "../../server";

let subjectCount = express.Router();
subjectCount.use(express.json());

// 메인 주제 추가
subjectCount.post("/", async (req: Request, res: Response) => {
  try {
    const result = await db!
      .collection("post")
      .find({ subject: req.body.subjectName })
      .toArray();

    const count = result.length;

    if (result) {
      return res.status(200).json(count);
    } else {
      return res.status(403).send("SubjectCount 데이터가 없습니다.");
    }
  } catch {
    return res.status(403).send("Subject 데이터를 불러올 수 없습니다.");
  }
});

export default subjectCount;
