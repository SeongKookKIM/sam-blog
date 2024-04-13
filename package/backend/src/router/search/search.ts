import express, { Request, Response } from "express";
import { db } from "../../utils/mongoData";

let search = express.Router();
search.use(express.json());

// 메인 주제 추가
search.post("/", async (req: Request, res: Response) => {
  const search = [
    {
      $search: {
        index: "SeatchPost",
        text: {
          query: req.body.searchValue,
          path: ["title", "subject", "subSubject", "content"],
        },
      },
    },
  ];
  const result = await db.collection("post").aggregate(search).toArray();

  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(403).send("검색 결과가 존재하지 않습니다.");
  }
});

export default search;
