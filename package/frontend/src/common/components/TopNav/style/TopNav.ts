import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 11;
  padding: 50px 50px 10px;
  display: flex;
  justify-content: flex-end;
  background-color: white;
  border-bottom: 1px solid lightgray;

  @media (max-width: 900px) {
    width: 100%;
    padding: 30px 50px 10px;
    left: auto;
  }
  @media (max-width: 400px) {
    padding: 30px 30px 10px;
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 20px;
  a {
    font-weight: 500;
    cursor: pointer;
    color: #333;
    @media (max-width: 900px) {
      font-size: 14px;
    }
  }
`;
