"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoData_1 = require("../../utils/mongoData");
let addPost = express_1.default.Router();
addPost.use(express_1.default.json());
// 타이틀 메인,서브 타이틀 찾은 후 목록 추가
addPost.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mongoData_1.db.collection("post").insertOne(req.body);
        if (result) {
            return res.status(200).send("포스터를 저장하였습니다.");
        }
        else {
            return res.status(403).send("포스터 데이터 저장에 실패하였습니다.");
        }
    }
    catch (_a) {
        return res.status(403).send("데이터를 찾을 수 없습니다.");
    }
}));
exports.default = addPost;
//# sourceMappingURL=addPost.js.map