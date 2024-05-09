import { useEffect, useRef, useState } from "react";
import { CheckedWrapper, PasswordCheckedForm } from "../style/PasswordChecked";
import axios from "axios";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import { Section } from "../../../styles/Section";
import { Input } from "../../../styles/Input";
import { Button } from "../../../styles/Buttons";
import { useMutation } from "@tanstack/react-query";
import { TPasswordType } from "../../../../types/passwordType";

function PasswordChecked() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [password, setPassword] = useState<string>("");

  const navigatge = useNavigate();

  //   useMutation을 사용하여 POST요청 보내기
  const mutation = useMutation({
    mutationFn: (password: TPasswordType) => {
      return axios
        .post(
          "https://sam-blog-server.vercel.app/write/passwordChcked",
          password,
        )
        .then((res) => {
          //비밀번호 확인 알림
          alert(res.data);
          // 통과 시 isLogin 쿠키를 생성 후 true로 변경(작성,수정,삭제 통과)
          const expires = new Date();
          expires.setMinutes(expires.getMinutes() + 60);
          cookie.save("isLogin", "pass", {
            expires,
            secure: true,
          });

          navigatge(0);
        })
        .catch((err) => {
          console.log(err);
          alert("비밀번호가 일치하지 않습니다.");
        });
    },
  });

  //   렌더링시 비밀번호 입력창에 포커스
  useEffect(() => {
    const inputFocus = inputRef.current;
    inputFocus!.focus();
  }, []);

  //   비밀번호 입력시 비밀번호 체크
  const hadnlerForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 비밀번호 입력하지 않았을 시 경고창 - 비밀번호 입력시 POST요청
    if (password?.length === 0) {
      alert("비밀번호를 입력해주세요.");
      const inputFocus = inputRef.current;
      inputFocus!.focus();
    } else {
      mutation.mutate({ password: password });
    }
  };

  return (
    <Section>
      <CheckedWrapper>
        <PasswordCheckedForm method="post" onSubmit={(e) => hadnlerForm(e)}>
          <p>글 작성 및 수정을 위해선 비밀번호를 입력하셔야 합니다.</p>
          <span>
            * 비밀번호 입력 후 1시간동안 글 작성 및 수정을 자유롭게 하실 수
            있습니다.
          </span>
          <Input
            type="password"
            name="password"
            autoComplete="username"
            ref={inputRef}
            width={"50%"}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password-test"
          />
          <Button type="submit" style={{ color: "black" }}>
            입력
          </Button>
        </PasswordCheckedForm>
      </CheckedWrapper>
    </Section>
  );
}

export default PasswordChecked;
