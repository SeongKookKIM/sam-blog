import styled from "styled-components";

export const List = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 2px solid #e9ecef;

  p {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 5px 0;
  }
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  span {
    font-size: 14px;
    color: #a9a9a9;
    &:nth-child(1) {
      color: #333;
    }
  }

  @media (max-width: 900px) {
    p {
      font-size: 19px;
    }
    div {
      gap: 10px;
    }
  }
`;
