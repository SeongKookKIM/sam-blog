import DOMPurify from "isomorphic-dompurify";
import "react-quill/dist/quill.core.css";
import {
  PostContentBox,
  PostDetailBtnBox,
  PostDetailInfo,
  PostDetailWrapper,
} from "../style/PostDetail";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Section } from "../../../common/styles/Section";
import { Button } from "../../../common/styles/Buttons";

function PostDetail() {
  // 쿠키에서 로그인 정보 가져오기

  const [postDate, setPostDate] = useState<string | undefined>("");

  // useNavigate로 보낸 Post State 받아오기
  const itemLocation = useLocation();

  const navigator = useNavigate();

  const { title, date, subject, subSubject, content } = itemLocation.state.post;

  // 날짜 String으로 변환
  useEffect(() => {
    const isDate = new Date(date).toLocaleDateString();
    setPostDate(isDate);
  }, [itemLocation, date]);

  //  포스터 삭제 버튼
  const handlerPostDelete = () => {
    if (window.confirm("게시물을 삭제 하시겠습니까?")) {
      axios
        .delete("http://localhost:8080/post/delete", {
          data: itemLocation.state.post,
        })
        .then((res) => {
          alert(res.data);
          navigator("/");
        })
        .catch((err) => console.log(err));
    } else {
      return;
    }
  };

  // 포스터 수정 버튼
  const hadnlerPostEdit = () => {
    const postData = itemLocation.state.post;
    navigator(`/write/edit`, { state: { postData } });
  };

  return (
    <Section>
      <PostDetailWrapper>
        <PostDetailInfo>
          <span>{postDate}</span>
          <p>
            {subject} {">"} <span>{subSubject}</span>
          </p>
          <strong>{title}</strong>
        </PostDetailInfo>
        <PostContentBox
          className="view ql-editor" // react-quill css
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(content),
          }}
        />

        <PostDetailBtnBox>
          <Button type="button" onClick={hadnlerPostEdit}>
            수정
          </Button>
          <Button type="button" onClick={handlerPostDelete}>
            삭제
          </Button>
        </PostDetailBtnBox>
      </PostDetailWrapper>
    </Section>
  );
}

export default PostDetail;
