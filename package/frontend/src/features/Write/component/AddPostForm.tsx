import { SubmitHandler, useForm } from "react-hook-form";
import {
  AddBtn,
  Alert,
  InputWrapper,
  Label,
  MainTitleWrapper,
  PostForm,
  Select,
} from "../style/AddPostForm";
import { Input } from "../../common/styles/Input";
import axios from "axios";
// import { useEffect, useState } from "react";
// import { TTitleListType } from "../../../types/titleListType";

type FormValues = {
  title: string;
  mainTitle: string;
  mainTitleAdd?: string;
  subTitle: string;
  subTitleAdd?: string;
};

function AddPostForm() {
  // const [mainTitleList,setMainTitleList] = useState<TTitleListType>([])
  //   useQuery로 데이터 가져오기

  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm<FormValues>();

  //   메인 타이틀 추가 텍스트
  const addMainTitleText = watch("mainTitleAdd", "");
  const addSubTitleText = watch("subTitleAdd", "");

  // PostAdd Submit시 데이터 보내기
  const formSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // 날짜 추가
    const date = new Date().getTime();
    console.log(date);
  };

  //   (메인,서브)타이틀 버튼 클릭시 DB 추가
  const onClickAddMainTitle = (title: string) => {
    const addTitle: string | undefined =
      title === "mainTitle" ? addMainTitleText : addSubTitleText;
    if (title !== "") {
      axios
        .post("http://localhost:8080/write/addTitle", {
          titleName: title,
          addTitle: addTitle,
        })
        .then((res) => {
          console.log(res.data);
          reset({ mainTitleAdd: "", subTitleAdd: "" });
        })
        .catch((err) => console.log(err));
    } else {
      alert("타이틀을 등록해주세요.");
    }
  };

  return (
    <PostForm onSubmit={handleSubmit(formSubmit)}>
      {/* 제목 */}
      <InputWrapper className="post-add-title">
        <Label>제목</Label>
        <Input
          width={"100%"}
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
          <Alert className="alert">{errors.title.message?.toString()}</Alert>
        )}
      </InputWrapper>

      {/* 메인타이틀 */}
      <InputWrapper className="post-add-mainTilte">
        <Label>메인 타이틀</Label>
        <MainTitleWrapper>
          <Select
            aria-invalid={
              isSubmitted ? (errors.mainTitle ? "true" : "false") : undefined
            }
            {...register("mainTitle", {
              required: "* 필수 입력란입니다.",
            })}
            defaultValue={""}
          >
            <option value="" disabled hidden>
              선택
            </option>
            <option value="123">1231412412412314124124</option>
          </Select>
          <div>
            <Input
              width={"200px"}
              type="text"
              placeholder="메인 타이틀을 등록해주세요."
              aria-invalid={
                isSubmitted
                  ? errors.mainTitleAdd
                    ? "true"
                    : "false"
                  : undefined
              }
              {...register("mainTitleAdd")}
            />
            <AddBtn
              type="button"
              onClick={() => onClickAddMainTitle("mainTitle")}
            >
              추가하기
            </AddBtn>
          </div>
        </MainTitleWrapper>
        {errors.mainTitle && (
          <Alert className="alert">
            {errors.mainTitle.message?.toString()}
          </Alert>
        )}
      </InputWrapper>

      {/* 서브타이틀 */}
      <InputWrapper className="post-add-mainTilte">
        <Label>서브 타이틀</Label>
        <MainTitleWrapper>
          <Select
            aria-invalid={
              isSubmitted ? (errors.subTitle ? "true" : "false") : undefined
            }
            {...register("subTitle", {
              required: "* 필수 입력란입니다.",
            })}
            defaultValue={""}
          >
            <option value="" disabled hidden>
              선택
            </option>
            <option value="123">1231412412412314124124</option>
          </Select>
          <div>
            <Input
              width={"200px"}
              type="text"
              placeholder="서브 타이틀을 등록해주세요."
              aria-invalid={
                isSubmitted
                  ? errors.subTitleAdd
                    ? "true"
                    : "false"
                  : undefined
              }
              {...register("subTitleAdd")}
            />
            <AddBtn
              type="button"
              onClick={() => onClickAddMainTitle("subTitle")}
            >
              추가하기
            </AddBtn>
          </div>
        </MainTitleWrapper>
        {errors.subTitle && (
          <Alert className="alert">{errors.subTitle.message?.toString()}</Alert>
        )}
      </InputWrapper>
      {/* react-quill 에디터 */}
      {/* firebase 사용해서 이미지 업로드 하기 */}
      <button type="submit" disabled={isSubmitting}>
        추가
      </button>
    </PostForm>
  );
}

export default AddPostForm;
