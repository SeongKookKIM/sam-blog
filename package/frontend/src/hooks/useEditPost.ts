import axios from "axios";

export const editPost = async (
  editData: {
    _id: string;
    title: string;
    subject: string;
    subSubject: string;
    content: string;
  } | null,
) => {
  const result = await axios.put("http://localhost:8080/post/edit", editData);

  return result;
};
