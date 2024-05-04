import { WriteWrapper } from "../style/Write";
import cookie from "react-cookies";

import { useLocation } from "react-router-dom";
import { TEditPostType } from "../../../types/postType";
import { Section } from "../../../common/styles/Section";
import AddPostForm from "../../../common/components/Post/container/AddPostForm";
import PasswordChecked from "../../../common/components/PasswordChecked/container/PasswordChecked";

function Write() {
  // 쿠키에서 로그인 정보 가져오기
  const isLogin: string | undefined = cookie.load("isLogin");

  const itemLocation = useLocation();
  const postData: TEditPostType | null = itemLocation.state
    ? itemLocation.state.postData
    : null;

  // 로그인 통과시 Write페이 정상 출력 - 통과 못 할 경우 PasswordCheck
  if (isLogin !== null && isLogin === "pass") {
    return (
      <Section>
        <WriteWrapper>
          <h2>{postData ? "글 수정" : "글 작성"}</h2>
          <AddPostForm editPostData={postData} />
        </WriteWrapper>
      </Section>
    );
  } else {
    return <PasswordChecked />;
  }
}

export default Write;
