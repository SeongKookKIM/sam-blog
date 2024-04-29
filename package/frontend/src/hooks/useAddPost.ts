import axios from "axios";
import { TPostType } from "../types/postType";

export const addPost = async (postData: TPostType) => {
  const result = await axios.post("/write/addPost", postData);

  return result;
};
