import styled from "styled-components";

export const Input = styled.input`
  width: ${(props) => props.width};
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  &:focus {
    border-bottom: 2px solid black;
  }
`;
