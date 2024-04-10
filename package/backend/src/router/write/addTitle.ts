import express, { Request, Response } from "express";
import { db } from "../../utils/mongoData";

let addTitle = express.Router();
addTitle.use(express.json());

// 메인 주제 추가
addTitle.post("/", async (req: Request, res: Response) => {
  try {
    const result = await db
      .collection("subject")
      .updateOne(
        { name: "subject" },
        { $set: { subjectList: req.body.subjectList } },
      );

    if (result) {
      return res.status(200).send("Subject 데이터 저장 성공하였습니다.");
    } else {
      return res.status(403).send("Subject 데이터 저장에 실패하였습니다.");
    }
  } catch {
    return res.status(403).send("Subject 데이터 저장에 실패하였습니다.");
  }
});

export default addTitle;
