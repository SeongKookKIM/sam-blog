import styled from "styled-components";

export const Nav = styled.nav`
  width: calc(100% - 330px);
  position: fixed;
  padding: 50px 50px 10px;
  display: flex;
  justify-content: flex-end;
  background-color: white;
  border-bottom: 1px solid lightgray;
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
