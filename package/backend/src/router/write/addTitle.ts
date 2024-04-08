import express, { Request, Response } from "express";
import { db } from "../../utils/mongoData";

let addTitle = express.Router();
addTitle.use(express.json());

// 타이틀 메인,서브 타이틀 찾은 후 목록 추가
addTitle.post("/", async (req: Request, res: Response) => {
  try {
    const resultMain = await db
      .collection("titleList")
      .updateOne({ titleName: "mainTitle" }, { $set: { list: req.body.main } });

    if (resultMain) {
      await db
        .collection("titleList")
        .updateOne({ titleName: "subTitle" }, { $set: { list: req.body.sub } });

      return res.status(200).send("Title 데이터 저장 성공");
    } else {
      return res.status(403).send("TItle 데이터 저장에 실패하였습니다.");
    }
  } catch {
    return res.status(403).send("Title 데이터 수정에 실패하였습니다.");
  }
});

export default addTitle;
