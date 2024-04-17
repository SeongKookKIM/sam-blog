import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 11;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px 30px;
  min-width: 60%;
  div {
    display: flex;
    gap: 30px;
    @media (max-width: 400px) {
      width: 100%;
      flex-direction: column;
    }
  }
  @media (max-width: 400px) {
    min-width: auto;
    width: 100%;
  }
`;

export const SearchInputWrapper = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
`;
