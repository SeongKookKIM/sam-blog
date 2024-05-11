import axios from "axios";

const editPost = async (
  editData: {
    _id: string;
    title: string;
    subject: string;
    subSubject: string;
    content: string;
  } | null,
) => {
  const result = await axios.put(
    "https://www.sam-blog-server.site/post/edit",
    editData,
  );

  return result;
};

export default editPost;
