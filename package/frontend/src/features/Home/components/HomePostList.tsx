import { TPostType } from "../../../types/postType";
import { List } from "../style/HomePostList";

interface IDataProps {
  post: TPostType;
}

// Home 데이터 리스트 목록 컴포넌트
function HomePostList({ post }: IDataProps) {
  const date: string = new Date(post.date).toLocaleDateString();
  console.log(post);
  return (
    <List>
      <p>{post.title}</p>
      <div>
        <span>{post.subSubject}</span>
        <span>{date}</span>
      </div>
    </List>
  );
}

export default HomePostList;
