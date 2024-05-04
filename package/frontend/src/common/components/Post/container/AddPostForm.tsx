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
import { Input } from "../../../styles/Input";
import { useCallback, useEffect, useState } from "react";
import Editor from "../component/Editor";
import { Button } from "../../../styles/Buttons";
import { useNavigate } from "react-router-dom";
import { FormValues } from "../../../../types/FormValuesType";
import { TEditPostType, TPostType } from "../../../../types/postType";
import { useFetchQuery } from "../../../../hooks/useQuery";
import addSubject from "../../../../hooks/useAddSubject";
import editPost from "../../../../hooks/useEditPost";
import addPost from "../../../../hooks/useAddPost";

interface IEditPostDataType {
  editPostData: TEditPostType | null;
}

function AddPostForm({ editPostData }: IEditPostDataType) {
  //   useQuery로 Subject 데이터 가져오기
  const { data, isLoading, isError, error } = useFetchQuery(
    "subject",
    "http://localhost:8080/write/postTitle",
  );

  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm<FormValues>();

  // Subject List State
  const [subject, setSubject] = useState<string[] | undefined>([]);

  // Editor Content
  const [content, setContent] = useState<string>("");

  // Edit subject State
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  // useNavigate
  const navigater = useNavigate();

  // Subject List에 추가
  useEffect(() => {
    setSubject(data?.data[0].subjectList);
  }, [data]);

  // 수정 시 content에 데이터 넣기
  useEffect(() => {
    if (editPostData) {
      setContent(editPostData.content || "");
      setSelectedSubject(editPostData.subject || "");
    } else {
      setContent("");
    }
  }, [editPostData]);

  //   메인 타이틀 추가 텍스트
  const addSubjectText = watch("addSubject", "");

  //   (메인)타이틀 버튼 클릭시 State에 추가
  const onClickAddMainTitle = useCallback(
    (addSubject: string) => {
      const subjectList = subject;

      if (addSubjectText === "") {
        alert("타이틀을 입력해주세요.");
      } else {
        switch (addSubject) {
          case "subject":
            subjectList?.push(addSubjectText as string);
            setSubject(subjectList);
            reset({ addSubject: "" });
            break;
        }
      }
    },
    // eslint-disable-next-line
    [addSubjectText],
  );

  // PostAdd Submit시 데이터 보내기
  const formSubmit: SubmitHandler<FormValues> = async (data) => {
    // 날짜 추가
    const date = new Date().getTime();

    // 컨텐츠 빈문자열일 경우 alert
    if (content === "") {
      alert("내용을 입력해주세요.");
    } else {
      // 주제 데이터
      const subjectData = {
        subjectList: subject,
      };
      // Post데이터
      const postData: TPostType = {
        title: data.title,
        date: date,
        subject: data.subject,
        subSubject: data.subSubject,
        content: content,
      };

      // Post Edit 데이터
      const editData = editPostData
        ? {
            _id: editPostData._id,
            title: data.title,
            subject: data.subject,
            subSubject: data.subSubject,
            content: content,
          }
        : null;

      try {
        // 1. 주제추가
        const addSubjectResult = await addSubject(subjectData);
        // addSubjectResult.status(200)
        if (addSubjectResult) {
          //  포스터 수정일시
          if (editPostData) {
            const editPostResult = await editPost(editData);
            // editPostResult.status(200)
            if (editPostResult) {
              alert(editPostResult.data);
              navigater("/");
              setTimeout(() => {
                navigater(0);
              }, 100);
            } else {
              console.log("포스터 수정 실패");
            }
          } else {
            // 새로운 포스터
            const addPostResult = await addPost(postData);

            // addPostResult.status(200)
            if (addPostResult) {
              alert(addPostResult.data);
              navigater("/");
              setTimeout(() => {
                navigater(0);
              }, 100);
            } else {
              console.log("포스터 생성 실패");
            }
          }
        } else {
          alert("서버 통신 오류");
        }
      } catch {
        throw Error;
      }
    }
  };

  /* // Test진행 시 주석(esLint 이슈)
  console.log(isLoading);
  console.log(isError);
  console.log(error);
  */

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
          defaultValue={editPostData ? editPostData.title : ""}
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

      {/* 주제 */}
      <InputWrapper className="post-add-mainTilte">
        <Label>메인 주제</Label>
        <MainTitleWrapper className="selected-box">
          <Select
            aria-invalid={
              isSubmitted ? (errors.subject ? "true" : "false") : undefined
            }
            {...register("subject", {
              required: "* 필수 입력란입니다.",
              value: selectedSubject || "",
            })}
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="" disabled hidden>
              선택
            </option>
            {subject?.map((subject, idx: number) => {
              return (
                <option value={subject} key={idx}>
                  {subject}
                </option>
              );
            })}
          </Select>
          <div>
            <Input
              width={"200px"}
              type="text"
              placeholder="메인 주제를 등록해주세요."
              aria-invalid={
                isSubmitted ? (errors.addSubject ? "true" : "false") : undefined
              }
              {...register("addSubject")}
            />
            <AddBtn
              type="button"
              onClick={() => onClickAddMainTitle("subject")}
            >
              추가하기
            </AddBtn>
          </div>
        </MainTitleWrapper>
        {errors.subject && (
          <Alert className="alert">{errors.subject.message?.toString()}</Alert>
        )}
      </InputWrapper>

      {/* 서브 주제 */}
      <InputWrapper className="post-add-title">
        <Label>서브 주제</Label>
        <Input
          width={"300px"}
          type="text"
          placeholder="서브주제를 입력해주세요."
          defaultValue={editPostData ? editPostData.subSubject : ""}
          aria-invalid={
            isSubmitted ? (errors.subSubject ? "true" : "false") : undefined
          }
          {...register("subSubject", {
            required: "* 필수 입력란입니다.",
          })}
        />
        {errors.subSubject && (
          <Alert className="alert">
            {errors.subSubject.message?.toString()}
          </Alert>
        )}
      </InputWrapper>

      {/* react-quill 에디터 */}
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
        {editPostData ? "수정" : "추가"}
      </Button>
    </PostForm>
  );
}

export default AddPostForm;
