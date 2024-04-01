import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchQuery = (nickName: string, api: string) => {
  return useQuery({
    queryKey: [nickName],
    queryFn: () => axios.get(api),
  });
};
