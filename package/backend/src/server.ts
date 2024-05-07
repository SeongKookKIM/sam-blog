import express, { Request, Response } from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

import passwordChecked from "./router/write/passwordChecked";
import postTitle from "./router/write/postTitle";
import addPost from "./router/write/addPost";
import addTitle from "./router/write/addTitle";
import subjectCount from "./router/menu/subjectCount";
import postList from "./router/home/postList";
import search from "./router/search/search";
import post from "./router/post/post";
import uploadImage from "./router/write/uploadImage";

import * as mongoDB from "mongodb";
import { MongoClient } from "mongodb";

const app = express();

app.use(express.urlencoded({ extended: true }));

// React Server.js 연결
app.use(express.json());
app.use(cors());

dotenv.config();

app.listen(process.env.PORT || 8080, () => {
  console.log(`
  Server listening on port: 8080
  #############################################  
    `);
});

export let db: mongoDB.Db;
const client = new MongoClient(process.env.MONGO ?? "");

app.get("/", (_req: Request, res: Response) => {
  client
    .connect()
    .then(() => {
      return res.send("Express Typescript on Vercel");
    })
    .catch((err) => {
      return res.send("연결안됌;");
    });
});

// Router
app.use("/write/passwordChcked", passwordChecked);
app.use("/write/postTitle", postTitle);
app.use("/write/addPost", addPost);
app.use("/write/addTitle", addTitle);
app.use("/menu/subjectCount", subjectCount);
app.use("/home/postList", postList);
app.use("/search", search);
app.use("/post", post);
app.use("/write/uploadImage", uploadImage);
