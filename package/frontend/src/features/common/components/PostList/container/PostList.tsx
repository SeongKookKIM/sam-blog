import { useEffect, useState } from "react";
import { HomePost, HomeWrapper } from "../style/postList";
import { useFetchQuery } from "../../../../../hooks/useQuery";
import { TPostType } from "../../../../../types/postType";
import { Section } from "../../../styles/Section";
import PostListInfo from "../component/PostListInfo";

interface ISubjectPropsType {
  subject: string | undefined;
}

function PostList({ subject }: ISubjectPropsType) {
  //   useQuery로 Post(All) 데이터 가져오기
  const { data, isLoading, isError, error } = useFetchQuery(
    "AllPostList",
    "http://localhost:8080/home/postList",
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

  // useQuery 로딩 시
  if (isLoading) return <>Loading...</>;

  // useQuery 에러 시
  if (isError) return <>{error.message}</>;

  return (
    <Section>
      <HomeWrapper>
        <p className="title">최신 글</p>
        <HomePost>
          {postList && postList.length > 0 ? (
            <>
              {postList.map((post, idx) => {
                return <PostListInfo post={post} key={idx} />;
              })}
            </>
          ) : (
            <div>데이터가 존재하지 않습니다.</div>
          )}
        </HomePost>
      </HomeWrapper>
    </Section>
  );
}

export default PostList;
