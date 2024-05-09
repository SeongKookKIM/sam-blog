import styled from "styled-components";

export const MenuWrapper = styled.main`
  width: 20%;
  min-width: 330px;
  height: calc(var(--vh, 1vh) * 100);
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
  z-index: 12;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    position: fixed;
    right: 100%;
    overflow: visible;
    gap: 60px;

    &.menu-show {
      right: auto;
      left: 0;
      transition: left 0.5s ease;
    }
  }
  @media (max-width: 400px) {
    min-width: auto;
    width: calc(100% - 50.84px);
  }
`;

export const MenuToggle = styled.div`
  background-color: #96ccfe;
  position: absolute;
  top: 0px;
  left: 100%;
  padding: 20px 8px;
  color: white;
  cursor: pointer;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  span {
    white-space: nowrap;
  }
`;

export const MenuTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  color: white;
  cursor: pointer;
  a {
    color: white;
  }
  @media (max-width: 900px) {
    font-size: 25px;
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
