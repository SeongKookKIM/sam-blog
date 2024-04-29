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
const mongodb_1 = require("mongodb");
let post = express_1.default.Router();
post.use(express_1.default.json());
// 타이틀 메인,서브 타이틀 찾은 후 목록 추가
post.delete("/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const result = yield mongoData_1.db
            .collection("post")
            .deleteOne({ _id: new mongodb_1.ObjectId(req.body._id) });
        if (result) {
            return res.status(200).send("게시물을 삭제하였습니다.");
        }
        else {
            return res
                .status(403)
                .send("삭제에 실패하였습니다.(삭제 데이터를 찾을 수 없습니다.)");
        }
    }
    catch (_a) {
        return res.status(403).send("서버 오류.");
    }
}));
post.put("/edit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const editData = {
        title: req.body.title,
        subject: req.body.subject,
        subSubject: req.body.subSubject,
        content: req.body.content,
    };
    const result = yield mongoData_1.db
        .collection("post")
        .updateOne({ _id: new mongodb_1.ObjectId(req.body._id) }, { $set: editData });
    if (result) {
        return res.status(200).send("데이터를 수정하였습니다.");
    }
    else {
        return res.status(403).send("데이터 수정에 실패하였습니다.");
    }
}));
exports.default = post;
//# sourceMappingURL=post.js.map