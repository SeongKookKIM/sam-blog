import express, { Request, Response } from "express";
import { db } from "../../utils/mongoData";
import { ObjectId } from "mongodb";

let post = express.Router();
post.use(express.json());

// 타이틀 메인,서브 타이틀 찾은 후 목록 추가
post.delete("/delete", async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.body._id) });

    if (result) {
      return res.status(200).send("게시물을 삭제하였습니다.");
    } else {
      return res
        .status(403)
        .send("삭제에 실패하였습니다.(삭제 데이터를 찾을 수 없습니다.)");
    }
  } catch {
    return res.status(403).send("서버 오류.");
  }
});

post.put("/edit", async (req: Request, res: Response) => {
  const editData = {
    title: req.body.title,
    subject: req.body.subject,
    subSubject: req.body.subSubject,
    content: req.body.content,
  };

  const result = await db
    .collection("post")
    .updateOne({ _id: new ObjectId(req.body._id) }, { $set: editData });

  if (result) {
    return res.status(200).send("데이터를 수정하였습니다.");
  } else {
    return res.status(403).send("데이터 수정에 실패하였습니다.");
  }
});

export default post;
