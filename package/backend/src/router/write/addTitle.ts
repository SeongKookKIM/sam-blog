import express, { Request, Response } from "express";
import { db } from "../../utils/mongoData";

let addTitle = express.Router();
addTitle.use(express.json());

// 타이틀 메인,서브 타이틀 찾은 후 목록 추가
addTitle.post("/", async (req: Request, res: Response) => {
  try {
    await db.collection("titleList").updateOne(
      { titleName: req.body.titleName }, // 검색 조건
      { $push: { list: req.body.addTitle } }, // 업데이트할 내용
    );

    return res.status(200).send("타이틀 저장!");
  } catch (err) {
    console.log(err);
    return res.status(200).json(err);
  }
});

export default addTitle;
