import axios from "axios";
import { TSubjectData } from "../types/subjectData";

//1. 주제 추가
export const addSubject = (subjectData: TSubjectData) => {
  const result = axios.post("/write/addTitle", subjectData);
  return result;
};
