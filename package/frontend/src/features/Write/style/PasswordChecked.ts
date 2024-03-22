import styled from "styled-components";

export const CheckedWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 66px);
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PasswordCheckedForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 30px;
  border: 1px solid black;
  p {
    font-size: 18px;
    font-weight: 600;
  }
  span {
    display: block;
    font-size: 14px;
    color: #a9a9a9;
  }
`;
