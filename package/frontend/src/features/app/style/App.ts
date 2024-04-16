import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;

  /* 반응형 */
  @media (max-width: 900px) {
    max-width: 700px;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 20px black;
    margin: 0 auto;
    overflow: hidden;
  }
`;

export const Content = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  overflow-y: scroll;

  /* ::-webkit-scrollbar 스타일 적용 */
  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
  }

  /* 스크롤바의 track 스타일 */
  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* 스크롤바의 배경색 */
  }

  /* 스크롤바의 thumb(바탕부분) 스타일 */
  &::-webkit-scrollbar-thumb {
    background: #96ccfe; /* 스크롤바의 색상 */
    border-radius: 6px; /* 스크롤바의 모서리 반경 */
  }

  /* 스크롤바의 thumb(바탕부분) hover 스타일 */
  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* 스크롤바 hover시 색상 */
  }
`;
