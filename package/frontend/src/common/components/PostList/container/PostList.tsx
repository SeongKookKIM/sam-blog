import { useEffect, useState } from "react";
import { Post, PostWrapper } from "../style/postList";
import { Section } from "../../../styles/Section";
import PostListInfo from "../component/PostListInfo";
import { useFetchQuery } from "../../../../hooks/useQuery";
import { TPostType } from "../../../../types/postType";

interface ISubjectPropsType {
  subject: string | undefined;
}

function PostList({ subject }: ISubjectPropsType) {
  //   useQuery로 Post(All) 데이터 가져오기
  const { data, isLoading, isError, error } = useFetchQuery(
    "AllPostList",
    "https://sam-blog-backend.vercel.app/home/postList",
  );
  const [postList, setPostList] = useState<TPostType[]>([]);

  // 레더링시 data 불러오기
  useEffect(() => {
    if (data) {
      if (subject) {
        // subject Filter
        const filteredData = data.data.filter(
          (post: TPostType) => post.subject === subject,
        );
        // 포스트 최신순으로 정렬
        const sortPost = filteredData.sort(
          (a: TPostType, b: TPostType) => b.date - a.date,
        );
        setPostList(sortPost);
      } else {
        //subject가 빈값일시 -> 전체 포스터
        const sortPost = data!.data.sort(
          (a: TPostType, b: TPostType) => b.date - a.date,
        );
        setPostList(sortPost);
      }
    }
  }, [data, subject]);

  /* Jest Data진행
  console.log(isLoading);
  console.log(isError);
  console.log(error);
   */

  // useQuery 로딩 시
  if (isLoading) return <>Loading...</>;

  // useQuery 에러 시
  if (isError) return <>{error.message}</>;

  return (
    <Section>
      <PostWrapper>
        <p className="title">{subject ? subject : "최신 글"}</p>
        <Post>
          {postList && postList.length > 0 ? (
            <>
              {postList.map((post, idx) => {
                return <PostListInfo post={post} key={idx} />;
              })}
            </>
          ) : (
            <div>데이터가 존재하지 않습니다.</div>
          )}
        </Post>
      </PostWrapper>
    </Section>
  );
}

export default PostList;
