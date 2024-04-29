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
  const result = await axios.put("/post/edit", editData);

  return result;
};
