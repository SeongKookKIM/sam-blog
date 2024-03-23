import { useEffect, useState } from "react";
import { WriteWrapper } from "../style/Write";
import PasswordChecked from "../components/PasswordChecked";
import { Section } from "../../common/styles/Section";
import cookie from "react-cookies";

function Write() {
  const [isChecked, setIsChecked] = useState<boolean | null>(null);

  useEffect(() => {
    const isLogin = cookie.load("isLogin");
    isLogin === "true" ? setIsChecked(true) : setIsChecked(false);
  }, []);

  //  isChecked가 True시 글작성 / False시 비밀번호 체크
  if (isChecked) {
    return (
      <Section>
        <WriteWrapper>글작성</WriteWrapper>
      </Section>
    );
  } else {
    return <PasswordChecked setIsChecked={setIsChecked} />;
  }
}

export default Write;
