"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
// React Server.js 연결
app.use(express_1.default.json());
app.use((0, cors_1.default)());
dotenv_1.default.config();
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
app.get("/", (_req, res) => {
    return res.send("Express Typescript on Vercel");
});
// Router
// app.use("/write/passwordChcked", passwordChecked);
// app.use("/write/postTitle", postTitle);
// app.use("/write/addPost", addPost);
// app.use("/write/addTitle", addTitle);
// app.use("/menu/subjectCount", subjectCount);
// app.use("/home/postList", postList);
// app.use("/search", search);
// app.use("/post", post);
// app.use("/write/uploadImage", uploadImage);
// app.get("*", function (req: Request, res: Response) {
//   res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
// });
//# sourceMappingURL=server.js.map