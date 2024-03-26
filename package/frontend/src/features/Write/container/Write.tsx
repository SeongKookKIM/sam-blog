import { PostAddForm, WriteWrapper } from "../style/Write";
import { Section } from "../../common/styles/Section";
import cookie from "react-cookies";
import PasswordChecked from "../../common/components/PasswordChecked/container/PasswordChecked";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  title: string;
};

function Write() {
  // 쿠키에서 로그인 정보 가져오기
  const isLogin: string | undefined = cookie.load("isLogin");

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm<FormValues>();

  // PostAdd Submit시 데이터 보내기
  const formSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // 날짜 추가
    const date = new Date().getTime();
    console.log(date);
  };

  // 로그인 통과시 Write페이 정상 출력 - 통과 못 할 경우 PasswordCheck
  if (isLogin === "pass") {
    return (
      <Section>
        <WriteWrapper>
          <h2>글작성</h2>
          <PostAddForm onSubmit={handleSubmit(formSubmit)}>
            {/* 제목 */}
            <label>제목</label>
            <input
              type="text"
              placeholder="제목을 입력해주세요."
              aria-invalid={
                isSubmitted ? (errors.title ? "true" : "false") : undefined
              }
              {...register("title", {
                required: "* 필수 입력란입니다.",
              })}
            />
            {errors.title && (
              <p className="alert">{errors.title.message?.toString()}</p>
            )}

            {/* 메인타이틀 */}
            {/* 타이틀 보낼 시 추가 버튼 눌러서 추가하기 - select박스로 진행 */}
            {/* 서브타이틀 */}
            {/* react-quill 에디터 */}
            {/* firebase 사용해서 이미지 업로드 하기 */}
            <button type="submit" disabled={isSubmitting}>
              추가
            </button>
          </PostAddForm>
        </WriteWrapper>
      </Section>
    );
  } else {
    return <PasswordChecked />;
  }
}

export default Write;
