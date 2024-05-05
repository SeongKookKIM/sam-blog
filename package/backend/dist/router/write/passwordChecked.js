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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mongoData_1 = require("../../utils/mongoData");
const mongodb_1 = require("mongodb");
let passwordChcked = express_1.default.Router();
passwordChcked.use(express_1.default.json());
// 비밀번호 일치하는지 확인
passwordChcked.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findPassword = yield mongoData_1.db
            .collection("isChecked")
            .findOne({ _id: new mongodb_1.ObjectID("65fd65f006aac3de229c5f50") });
        const result = bcryptjs_1.default.compareSync(req.body.password, findPassword.password);
        return result
            ? res.status(200).send("접속에 성공하셨습니다.")
            : res.status(403).send("비밀번호가 일치하지 않습니다.");
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = passwordChcked;
//# sourceMappingURL=passwordChecked.js.map