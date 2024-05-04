import axios from "axios";
import { TPostType } from "../types/postType";

const addPost = async (postData: TPostType) => {
  const result = await axios.post(
    "http://localhost:8080/write/addPost",
    postData,
  );

  return result;
};

export default addPost;
