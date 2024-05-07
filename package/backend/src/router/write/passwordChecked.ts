import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import db from "../../server";

let passwordChcked = express.Router();
passwordChcked.use(express.json());

// 비밀번호 일치하는지 확인
passwordChcked.post("/", async (req: Request, res: Response) => {
  try {
    const findPassword = await db!
      .collection("isChecked")
      .findOne({ _id: new ObjectId("65fd65f006aac3de229c5f50") });
    const result = bcrypt.compareSync(
      req.body.password,
      findPassword!.password,
    );

    return result
      ? res.status(200).send("접속에 성공하셨습니다.")
      : res.status(403).send("비밀번호가 일치하지 않습니다.");
  } catch (err) {
    console.log(err);
  }
});

export default passwordChcked;
