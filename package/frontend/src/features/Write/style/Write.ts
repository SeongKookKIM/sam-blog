import styled from "styled-components";

export const WriteWrapper = styled.div`
  width: 100%;
  padding: 30px;
  p {
    font-size: 18px;
    font-weight: bold;
  }

  @media (max-width: 400px) {
    padding: 30px 10px;
    h2 {
      text-align: center;
    }
  }
`;
