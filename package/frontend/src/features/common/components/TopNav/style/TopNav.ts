import styled from "styled-components";

export const Nav = styled.nav`
  width: calc(100% - 330px);
  position: fixed;
  padding: 50px 50px 0;
  display: flex;
  justify-content: flex-end;
  background-color: white;
`;

export const Div = styled.div`
  display: flex;
  gap: 20px;
  a {
    font-weight: 500;
    cursor: pointer;
    color: #333;
  }
`;
