import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  padding: 30px;
  p.title {
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 400px) {
      text-align: center;
    }
  }
`;
export const HomePost = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 40px;
  cursor: pointer;

  @media (max-width: 900px) {
    gap: 30px;
  }
`;
