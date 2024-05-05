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
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = __importDefault(require("dotenv"));
const multer_1 = __importDefault(require("multer"));
let uploadImage = express_1.default.Router();
uploadImage.use(express_1.default.json());
dotenv_1.default.config();
// multer
const upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
});
// AWS Data
const region = process.env.VITE_AWS_S3_BUCKET_REGION;
const accessKeyId = process.env.VITE_AWS_S3_BUCKET_ACCESS_KEY_ID;
const secretAccessKey = process.env.VITE_AWS_S3_BUCKET_SECRET_ACCESS_KEY;
// 타이틀 메인,서브 타이틀 찾은 후 목록 추가
uploadImage.post("/", upload.single("file"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const name = Date.now().toString();
        const bucket = "sam-blog-image";
        aws_sdk_1.default.config.update({
            region,
            accessKeyId,
            secretAccessKey,
        });
        const upload = new aws_sdk_1.default.S3.ManagedUpload({
            params: {
                Bucket: bucket,
                Key: `upload/${name}`,
                Body: (_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer,
            },
        });
        const { Location: imgUrl } = yield upload.promise();
        return res.status(200).json(imgUrl);
    }
    catch (_b) {
        console.log("이미지 업로드 오류.");
    }
}));
exports.default = uploadImage;
//# sourceMappingURL=uploadImage.js.map