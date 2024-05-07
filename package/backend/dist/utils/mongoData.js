"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongodb_1 = require("mongodb");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
// const options: mongoDB.MongoClientOptions = {
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 10000,
//   socketTimeoutMS: 120000,
//   connectTimeoutMS: 60000,
//   poolSize: 10,
// };
const mongoURI = process.env.MONGO || process.env.MONGODB_URI;
if (!mongoURI) {
    console.error("MONGODB_URI 또는 MONGO 환경 변수가 설정되지 않았습니다.");
    process.exit(1);
}
// 새로운 연결 문자열 형식 사용 (mongodb+srv://...)
const client = new mongodb_1.MongoClient(mongoURI);
client
    .connect()
    .then(() => {
    console.log("db연결");
    exports.db = client.db("blog");
})
    .catch((err) => {
    console.error("MongoDB 연결 실패:", err);
    process.exit(1);
});
//# sourceMappingURL=mongoData.js.map