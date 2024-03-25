import { WriteWrapper } from "../style/Write";
import { Section } from "../../common/styles/Section";
import cookie from "react-cookies";
import PasswordChecked from "../../common/components/PasswordChecked/container/PasswordChecked";

function Write() {
  const isLogin: string | undefined = cookie.load("isLogin");

  if (isLogin === "pass") {
    return (
      <Section>
        <WriteWrapper>글작성</WriteWrapper>
      </Section>
    );
  } else {
    return <PasswordChecked />;
  }
}

export default Write;
