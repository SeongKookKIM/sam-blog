import { useEffect, useRef, useState } from "react";

import { CheckedWrapper, PasswordCheckedForm } from "../style/PasswordChecked";
import { Section } from "../../common/styles/Section";
import { Input } from "../../common/styles/Input";
import { Button } from "../../common/styles/Buttons";
import axios from "axios";

function PasswordChecked() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [password, setPassword] = useState<string>();

  //   렌더시 비밀번호 입력창에 포커스
  useEffect(() => {
    const inputFocus = inputRef.current;
    inputFocus!.focus();
  }, []);

  //   비밀번호 입력시 비밀번호 체크
  const hadnlerForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target;

    console.log(formElement);
    console.log(password);

    if (password?.length === 0) {
      alert("비밀번호를 입력해주세요.");
    } else {
      console.log("비밀번호 입력");

      axios
        .post("http://localhost:8080/passwordChcked", { password: password })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Section>
      <CheckedWrapper>
        <PasswordCheckedForm method="post" onSubmit={(e) => hadnlerForm(e)}>
          <p>글 작성을 위해선 비밀번호를 입력하셔야 합니다.</p>
          <span>
            * 비밀번호 입력 후 1시간동안 글 작성을 자유롭게 하실 수 있습니다.
          </span>
          <Input
            type="password"
            autoComplete="username"
            ref={inputRef}
            width={"50%"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">입력</Button>
        </PasswordCheckedForm>
      </CheckedWrapper>
    </Section>
  );
}

export default PasswordChecked;
