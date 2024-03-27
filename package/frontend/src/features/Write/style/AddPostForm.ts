import styled from "styled-components";

export const PostForm = styled.form`
  width: 100%;
  min-width: 500px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;
export const MainTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 50px;
`;

export const Select = styled.select`
  min-width: 100px;
  padding: 5px 4px;
`;

export const AddBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  padding: 3px 10px;
  color: white;
  background-color: #96ccfe;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
`;

export const Alert = styled.p`
  &.alert {
    font-size: 13px;
    color: red;
    font-weight: 500;
    margin-top: 10px;
  }
`;
