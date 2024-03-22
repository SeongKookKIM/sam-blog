import { useEffect, useState } from "react";
import { HomePost, HomeWrapper } from "../style/Home";
import { TDummyData } from "../../../types/dummyDataType";
import { dummyData } from "../../../utils/dummyData";
import { Section } from "../../common/styles/Section";
import HomePostList from "../components/HomePostList";

function Home() {
  const [data, setData] = useState<TDummyData[]>([]);

  // 레더링시 data 불러오기
  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <Section>
      <HomeWrapper>
        <p className="title">최신 글</p>
        <HomePost>
          {data && data.length > 0 ? (
            <>
              {data.map((data, idx) => {
                return <HomePostList data={data} key={idx} />;
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
