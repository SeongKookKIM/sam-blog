"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const passwordChecked_1 = __importDefault(require("./router/write/passwordChecked"));
const postTitle_1 = __importDefault(require("./router/write/postTitle"));
const addPost_1 = __importDefault(require("./router/write/addPost"));
const addTitle_1 = __importDefault(require("./router/write/addTitle"));
const subjectCount_1 = __importDefault(require("./router/menu/subjectCount"));
const postList_1 = __importDefault(require("./router/home/postList"));
const search_1 = __importDefault(require("./router/search/search"));
const post_1 = __importDefault(require("./router/post/post"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
// React Server.js 연결
app.use(express_1.default.json());
app.use((0, cors_1.default)());
dotenv_1.default.config();
app.listen(process.env.PORT, () => {
    console.log(`
  Server listening on port: 8080
  #############################################  
    `);
});
// server-react connect
app.use(express_1.default.static(path_1.default.join(__dirname, "../../frontend/dist")));
app.get("/", function (req, res) {
    console.log(req);
    res.sendFile(path_1.default.join(__dirname, "../../frontend/dist/index.html"));
});
// Router
app.use("/write/passwordChcked", passwordChecked_1.default);
app.use("/write/postTitle", postTitle_1.default);
app.use("/write/addPost", addPost_1.default);
app.use("/write/addTitle", addTitle_1.default);
app.use("/menu/subjectCount", subjectCount_1.default);
app.use("/home/postList", postList_1.default);
app.use("/search", search_1.default);
app.use("/post", post_1.default);
app.get("*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../../frontend/dist/index.html"));
});
//# sourceMappingURL=server.js.map