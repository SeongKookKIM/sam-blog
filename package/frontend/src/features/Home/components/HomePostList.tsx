import { TDummyData } from "../../../types/dummyDataType";
import { List } from "../style/HomePostList";

interface IDataProps {
  data: TDummyData;
}

// Home 데이터 리스트 목록 컴포넌트
function HomePostList({ data }: IDataProps) {
  const date: string = new Date(data.date).toLocaleDateString();
  return (
    <List>
      <p>{data.title}</p>
      <span>{date}</span>
    </List>
  );
}

export default HomePostList;
