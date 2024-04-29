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
let postTitle = express_1.default.Router();
postTitle.use(express_1.default.json());
// 타이틀 메인,서브 타이틀 찾은 후 목록 추가
postTitle.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mongoData_1.db.collection("subject").find().toArray();
        return res.status(200).json(result);
    }
    catch (_a) {
        return res.status(403).send("데이터를 찾을 수 없습니다.");
    }
}));
exports.default = postTitle;
//# sourceMappingURL=postTitle.js.map