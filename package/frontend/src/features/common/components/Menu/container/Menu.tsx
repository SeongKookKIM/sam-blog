import { useEffect, useState } from "react";
import {
  MenuList,
  MenuListOl,
  MenuListUl,
  MenuTitle,
  MenuWrapper,
  Strong,
} from "../style/Menu";

import { Link } from "react-router-dom";
import { TDummyData } from "../../../../../types/dummyDataType";
import { dummyData } from "../../../../../utils/dummyData";

function Menu() {
  const [data, setData] = useState<TDummyData[]>([]);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  // 레더링시 data 불러오기
  useEffect(() => {
    setData(dummyData);
  }, []);

  // 메인 메뉴 클릭시 해당 Index ol에 높이 변경
  const onClickMenu = (index: number) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <MenuWrapper>
      <MenuTitle>
        <Link to="/">
          Sam <span>Record</span>
        </Link>
      </MenuTitle>
      <MenuList>
        {/* Menu List */}
        <MenuListUl>
          {data && data.length > 0 ? (
            <>
              {data.map((menuList, idx) => {
                return (
                  <li key={idx}>
                    <Strong onClick={() => onClickMenu(idx)}>
                      {menuList.mainTitle}{" "}
                      <span>{clickedIndex === idx ? "▲" : "▼"}</span>
                    </Strong>
                    {/* SubMenu List */}
                    <MenuListOl
                      className={clickedIndex === idx ? "selected" : ""}
                    >
                      {menuList.subTitle && menuList.subTitle.length > 0 ? (
                        <>
                          {menuList.subTitle.map((subList, i) => {
                            return (
                              <li key={i}>
                                <p>- {subList}</p>
                              </li>
                            );
                          })}
                        </>
                      ) : (
                        ""
                      )}
                    </MenuListOl>
                  </li>
                );
              })}
            </>
          ) : (
            ""
          )}
        </MenuListUl>
      </MenuList>
    </MenuWrapper>
  );
}

export default Menu;
