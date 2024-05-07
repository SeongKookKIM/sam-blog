import axios from "axios";
import { TPostType } from "../types/postType";

const addPost = async (postData: TPostType) => {
  const result = await axios.post(
    "https://sam-blog-server.vercel.app/write/addPost",
    postData,
  );

  return result;
};

export default addPost;
