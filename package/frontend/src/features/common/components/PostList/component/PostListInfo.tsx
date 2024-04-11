import { TPostType } from "../../../../../types/postType";
import { List } from "../style/PostListInfo";

interface IDataProps {
  post: TPostType;
}

// Home 데이터 리스트 목록 컴포넌트
function PostListInfo({ post }: IDataProps) {
  const date: string = new Date(post.date).toLocaleDateString();
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

export default PostListInfo;
