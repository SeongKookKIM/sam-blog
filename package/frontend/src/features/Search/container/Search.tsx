import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { TPostType } from "../../../types/postType";
import { Section } from "../../../common/styles/Section";
import {
  Post,
  PostWrapper,
} from "../../../common/components/PostList/style/postList";
import { List } from "../../../common/components/PostList/style/PostListInfo";

function Search() {
  const { term } = useParams();

  const [postList, setPostList] = useState<TPostType[]>([]);

  const navigator = useNavigate();

  useEffect(() => {
    if (term) {
      axios
        .post("https://www.sam-blog-server.site/search", {
          searchValue: term,
        })
        .then((res) => setPostList(res.data))
        .catch((err) => console.log(err));
    }
  }, [term]);

  return (
    <Section>
      <PostWrapper>
        <p className="title">검색 결과</p>
        <Post>
          {postList && postList.length > 0 ? (
            <>
              {postList.map((post, idx) => {
                const date: string = new Date(post.date).toLocaleDateString();
                return (
                  <List
                    key={idx}
                    onClick={() =>
                      navigator(`/detail/${post.title}`, { state: { post } })
                    }
                  >
                    <p>{post.title}</p>
                    <div>
                      <span>{post.subSubject}</span>
                      <span>{date}</span>
                    </div>
                  </List>
                );
              })}
            </>
          ) : (
            <div>검색 결과가 존재하지 않습니다.</div>
          )}
        </Post>
      </PostWrapper>
    </Section>
  );
}

export default Search;
