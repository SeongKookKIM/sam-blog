import { WriteWrapper } from "../style/Write";
import { Section } from "../../common/styles/Section";
import cookie from "react-cookies";
import PasswordChecked from "../../common/components/PasswordChecked/container/PasswordChecked";
import AddPostForm from "../component/AddPostForm";

function Write() {
  // 쿠키에서 로그인 정보 가져오기
  const isLogin: string | undefined = cookie.load("isLogin");

  // 로그인 통과시 Write페이 정상 출력 - 통과 못 할 경우 PasswordCheck
  if (isLogin === "pass") {
    return (
      <Section>
        <WriteWrapper>
          <h2>글작성</h2>
          <AddPostForm />
        </WriteWrapper>
      </Section>
    );
  } else {
    return <PasswordChecked />;
  }
}

export default Write;
