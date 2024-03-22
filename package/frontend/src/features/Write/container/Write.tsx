import { useState } from "react";
import { WriteWrapper } from "../style/Write";
import PasswordChecked from "../components/PasswordChecked";
import { Section } from "../../common/styles/Section";

function Write() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  console.log(setIsChecked);

  //  isChecked가 True시 글작성 / False시 비밀번호 체크
  if (isChecked) {
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
