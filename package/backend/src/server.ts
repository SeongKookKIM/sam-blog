import express, { Request, Response } from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

import passwordChecked from "./router/write/passwordChecked";
import addTitle from "./router/write/addTitle";

const app = express();

app.use(express.urlencoded({ extended: true }));

// React Server.js 연결
app.use(express.json());
app.use(cors());

dotenv.config();

app.listen("8080", () => {
  console.log(`
        #############################################
        🛡️ Server listening on port: 8080 🛡️
        #############################################  
    `);
});

// server-react connect
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/", function (req: Request, res: Response) {
  console.log(req);
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Router
app.use("/write/passwordChcked", passwordChecked);
app.use("/write/addTitle", addTitle);

app.get("*", function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
