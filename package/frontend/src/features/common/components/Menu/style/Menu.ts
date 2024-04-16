import styled from "styled-components";

export const MenuWrapper = styled.main`
  width: 23%;
  min-width: 320px;
  height: 100vh;
  display: flex;
  background-color: #96ccfe;
  padding: 50px 30px 30px;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    position: absolute;
    /* right: 100%; */
    overflow: visible;
    left: 0;
    z-index: 10;
  }
`;

export const MenuToggle = styled.div`
  background-color: "#96ccfe";
  position: absolute;
  z-index: 11;
  top: 20px;
  left: 100%;
`;

export const MenuTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  color: white;
  cursor: pointer;
  a {
    color: white;
  }
`;

export const MenuList = styled.div`
  width: 100%;
  font-size: 20px;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const MenuListUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Strong = styled.strong`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  span {
    font-size: 16px;
  }
`;
