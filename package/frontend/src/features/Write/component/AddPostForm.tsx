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
import { useFetchQuery } from "../../../hooks/useQuery";
import { useCallback, useEffect, useState } from "react";
import Editor from "../../common/components/Editor/container/Editor";
import { Button } from "../../common/styles/Buttons";
// import axios from "axios";

type FormValues = {
  title: string;
  mainTitle: string;
  mainTitleAdd?: string;
  subTitle: string;
  subTitleAdd?: string;
};

function AddPostForm() {
  //   useQuery로 타이틀 데이터 가져오기
  const { data, isLoading, isError, error } = useFetchQuery(
    "title",
    "http://localhost:8080/write/postTitle",
  );

  // Title List State
  const [mainTitle, setMainTitle] = useState<string[] | undefined>([]);
  const [subTitle, setSubTitle] = useState<string[] | undefined>([]);
  // Editor Content
  const [content, setContent] = useState<string>("");

  // Title List에
  useEffect(() => {
    setMainTitle(data?.data[0].list);
    setSubTitle(data?.data[1].list);
  }, [data]);

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
    console.log(content);
  };

  //   (메인,서브)타이틀 버튼 클릭시 State에 추가
  const onClickAddMainTitle = useCallback(
    (title: string) => {
      const mainTitleList = mainTitle;

      const subTitleList = subTitle;

      if (addMainTitleText === "" && addSubTitleText === "") {
        alert("타이틀을 입력해주세요.");
      } else {
        switch (title) {
          case "mainTitle":
            mainTitleList?.push(addMainTitleText as string);
            setMainTitle(mainTitleList);
            reset({ mainTitleAdd: "" });
            break;
          case "subTitle":
            subTitleList?.push(addSubTitleText as string);
            setSubTitle(subTitleList);
            reset({ subTitleAdd: "" });
            break;
        }
      }
    },
    [addMainTitleText, addSubTitleText],
  );

  // useQuery 로딩 시
  if (isLoading) return <>Loading...</>;

  // useQuery 에러 시
  if (isError) return <>{error.message}</>;

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
            {mainTitle?.map((main: string, idx: number) => {
              return (
                <option value={main} key={idx}>
                  {main}
                </option>
              );
            })}
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
            {subTitle?.map((sub: string, idx: number) => {
              return (
                <option value={sub} key={idx}>
                  {sub}
                </option>
              );
            })}
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
      <Editor content={content} setContent={setContent} />
      <Button
        type="submit"
        disabled={isSubmitting}
        style={{
          backgroundColor: "#96ccfe",
          color: "white",
          border: "none",
          maxWidth: "200px",
          width: "100%",
          margin: "0 auto",
          borderRadius: "10px",
          fontWeight: "700",
        }}
      >
        추가
      </Button>
    </PostForm>
  );
}

export default AddPostForm;
