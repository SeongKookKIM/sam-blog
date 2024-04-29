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
let subjectCount = express_1.default.Router();
subjectCount.use(express_1.default.json());
// 메인 주제 추가
subjectCount.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mongoData_1.db
            .collection("post")
            .find({ subject: req.body.subjectName })
            .toArray();
        const count = result.length;
        if (result) {
            return res.status(200).json(count);
        }
        else {
            return res.status(403).send("SubjectCount 데이터가 없습니다.");
        }
    }
    catch (_a) {
        return res.status(403).send("Subject 데이터를 불러올 수 없습니다.");
    }
}));
exports.default = subjectCount;
//# sourceMappingURL=subjectCount.js.map