import { useEffect, useState } from "react";
import {
  MenuList,
  MenuListUl,
  MenuTitle,
  MenuToggle,
  MenuWrapper,
  Strong,
} from "../style/Menu";

import { Link, useNavigate } from "react-router-dom";
import { useFetchQuery } from "../../../../../hooks/useQuery";
import axios from "axios";

function Menu() {
  //   useQuery로 Subject 데이터 가져오기
  const { data, isLoading, isError, error } = useFetchQuery(
    "title",
    "http://localhost:8080/write/postTitle",
  );

  // Subject State
  const [subjectList, setSubjectList] = useState<string[]>([]);
  const [subjectCounts, setSubjectCounts] = useState<{
    [subject: string]: number;
  }>({});

  // 반응형 메뉴 토글
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);

  const navigator = useNavigate();

  // 레더링시 data 불러오기
  useEffect(() => {
    // Subject 카운트 함수
    const fetchSubjectCounts = async () => {
      const counts: { [subject: string]: number } = {};
      for (const subject of data?.data[0].subjectList || []) {
        try {
          const response = await axios.post(
            "http://localhost:8080/menu/subjectCount",
            {
              subjectName: subject,
            },
          );
          counts[subject] = response.data;
        } catch (err) {
          console.log(err);
        }
      }
      setSubjectCounts(counts);
    };
    // 데이터 있을 경우 data 넣기, 카운트 함수 실행
    if (data) {
      setSubjectList(data?.data[0].subjectList);
      fetchSubjectCounts();
    }
  }, [data]);

  // useQuery 로딩 시
  if (isLoading) return <>Loading...</>;

  // useQuery 에러 시
  if (isError) return <>{error.message}</>;

  return (
    <MenuWrapper className={isMenuToggle ? "menu-show" : ""}>
      <MenuToggle onClick={() => setIsMenuToggle(!isMenuToggle)}>
        <span>{isMenuToggle ? "Hide" : "Sam Blog Menu Show!"}</span>
      </MenuToggle>
      <MenuTitle>
        <Link to="/">
          Sam <span>Record</span>
        </Link>
      </MenuTitle>
      <MenuList>
        {/* Menu List */}
        <MenuListUl>
          {subjectList && subjectList.length > 0 ? (
            <>
              {subjectList.map((menuList, idx) => {
                return (
                  <li key={idx}>
                    <Strong
                      onClick={() => {
                        navigator(`/subjectList/${menuList}`);
                      }}
                    >
                      {menuList}
                      <span className="subject-count">
                        ({subjectCounts[menuList] || 0})
                      </span>
                    </Strong>
                  </li>
                );
              })}
            </>
          ) : (
            <p>Clear</p>
          )}
        </MenuListUl>
      </MenuList>
    </MenuWrapper>
  );
}

export default Menu;
