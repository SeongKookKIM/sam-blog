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

// // server-react connect
// app.use(express.static(path.join(__dirname, "../../frontend/dist")));

// app.get("/", function (req: Request, res: Response) {
//   console.log(req);
//   res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
// });

// Router
app.use("/write/passwordChcked", passwordChecked);
app.use("/write/postTitle", postTitle);
app.use("/write/addPost", addPost);
app.use("/write/addTitle", addTitle);
app.use("/menu/subjectCount", subjectCount);
app.use("/home/postList", postList);
app.use("/search", search);
app.use("/post", post);

// app.get("*", function (req: Request, res: Response) {
//   res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
// });
