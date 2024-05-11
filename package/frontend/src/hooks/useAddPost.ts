import axios from "axios";
import { TPostType } from "../types/postType";

const addPost = async (postData: TPostType) => {
  const result = await axios.post(
    "https://www.sam-blog-server.site/write/addPost",
    postData,
  );

  return result;
};

export default addPost;
