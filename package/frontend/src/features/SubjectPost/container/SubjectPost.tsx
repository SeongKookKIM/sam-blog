import { useParams } from "react-router-dom";
import PostList from "../../common/components/PostList/container/PostList";

function SubjectPost() {
  const subject = useParams();
  console.log(subject.id);

  return (
    <>
      <PostList subject={subject.id} />
    </>
  );
}

export default SubjectPost;
