import { useEffect, useState } from "react";
import { HomePost, HomeWrapper } from "../style/Home";
import { Section } from "../../common/styles/Section";
import { useFetchQuery } from "../../../hooks/useQuery";
import { TPostType } from "../../../types/postType";
import HomePostList from "../components/HomePostList";

function Home() {
  //   useQuery로 Post(All) 데이터 가져오기
  const { data, isLoading, isError, error } = useFetchQuery(
    "AllPostList",
    "http://localhost:8080/home/postList",
  );
  const [postList, setPostList] = useState<TPostType[]>([]);

  // 레더링시 data 불러오기
  useEffect(() => {
    setPostList(data?.data);
  }, [data]);

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
                return <HomePostList post={post} key={idx} />;
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

export default Home;
