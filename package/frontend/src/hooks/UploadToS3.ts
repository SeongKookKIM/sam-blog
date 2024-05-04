import AWS from "aws-sdk";

interface UploadToS3Options {
  file: File;
  bucket: string;
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
}

const uploadToS3 = async (options: UploadToS3Options): Promise<string> => {
  const { file, bucket, region, accessKeyId, secretAccessKey } = options;

  const name = Date.now().toString();

  AWS.config.update({
    region,
    accessKeyId,
    secretAccessKey,
  });

  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucket,
      Key: `upload/${name}`,
      Body: file,
    },
  });

  const { Location: imgUrl } = await upload.promise();

  return imgUrl;
};

export default uploadToS3;
