import express, { Request, Response } from "express";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import multer from "multer";

let uploadImage = express.Router();
uploadImage.use(express.json());

dotenv.config();

// multer
const upload = multer({
  storage: multer.memoryStorage(),
});

// AWS Data
const region = process.env.VITE_AWS_S3_BUCKET_REGION;
const accessKeyId = process.env.VITE_AWS_S3_BUCKET_ACCESS_KEY_ID;
const secretAccessKey = process.env.VITE_AWS_S3_BUCKET_SECRET_ACCESS_KEY;

// 타이틀 메인,서브 타이틀 찾은 후 목록 추가
uploadImage.post(
  "/",
  upload.single("file"),
  async (req: Request, res: Response) => {
    try {
      const name = Date.now().toString();
      const bucket = "sam-blog-image";

      AWS.config.update({
        region,
        accessKeyId,
        secretAccessKey,
      });

      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: bucket,
          Key: `upload/${name}`,
          Body: req.file?.buffer,
        },
      });

      const { Location: imgUrl } = await upload.promise();

      return res.status(200).json(imgUrl);
    } catch {
      console.log("이미지 업로드 오류.");
    }
  },
);

export default uploadImage;
