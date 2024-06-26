import express, { Request, Response } from "express";
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

app.get("/", (_req: Request, res: Response) => {
  return res.send("Express Typescript on Vercel");
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
