import styled from "styled-components";

export const CheckedWrapper = styled.div`
  width: 100%;
  /* height: calc(var(--vh, 1vh) * 100); */
  height: 860px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    height: calc(var(--vh, 1vh) * 100);
  }
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
  overflow: hidden;
  p {
    font-size: 18px;
    font-weight: 600;
  }
  span {
    display: block;
    font-size: 14px;
    color: #a9a9a9;
  }

  @media (max-width: 900px) {
    p {
      font-size: 16px;
      text-align: center;
    }
    span {
      text-align: center;
    }
    input {
      min-width: 200px;
    }
  }
`;
