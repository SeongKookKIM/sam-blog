import axios from "axios";
import { TSubjectData } from "../types/subjectData";

//1. 주제 추가
const addSubject = (subjectData: TSubjectData) => {
  const result = axios.post(
    "https://www.sam-blog-server.site/write/addTitle",
    subjectData,
  );
  return result;
};

export default addSubject;
