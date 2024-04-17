import styled from "styled-components";

export const PostDetailWrapper = styled.div`
  width: 100%;
  padding: 30px;
`;

export const PostDetailInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
  border-bottom: 2px solid #a9a9a9;
  span {
    font-size: 14px;
    color: #a9a9a9;
  }
  p {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: center;
    gap: 7px;
    span {
      font-size: 14px;
      color: #333;
    }
  }
  strong {
    margin-top: 20px;
    width: 100%;
    font-size: 24px;
    color: black;
  }

  @media (max-width: 900px) {
    gap: 20px;
    strong {
      font-size: 19px;
    }
  }
`;

export const PostContentBox = styled.div`
  width: 100%;
  margin-top: 20px;
  @media (max-width: 900px) {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;

export const PostDetailBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
`;
