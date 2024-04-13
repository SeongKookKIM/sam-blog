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
import { useFetchQuery } from "../../../../../hooks/useQuery";
import { useCallback, useEffect, useState } from "react";
import Editor from "../component/Editor";
import { Button } from "../../../styles/Buttons";
import axios from "axios";
import { TEditPostType, TPostType } from "../../../../../types/postType";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

type FormValues = {
  title: string;
  subject: string;
  addSubject: string;
  subSubject: string;
};

interface IEditPostDataType {
  editPostData: TEditPostType;
}

function AddPostForm({ editPostData }: IEditPostDataType) {
  //   useQuery로 Subject 데이터 가져오기
  const { data, isLoading, isError, error } = useFetchQuery(
    "subject",
    "http://localhost:8080/write/postTitle",
  );

  // Subject List State
  const [subject, setSubject] = useState<string[] | undefined>([]);

  // Editor Content
  const [content, setContent] = useState<string>("");

  // Edit subject State
  const [selectedSubject, setSelectedSubject] = useState<string>(
    editPostData ? editPostData.subject : "",
  );

  // Edit데이터 가져오기
  const navigater = useNavigate();

  // Subject List에 추가
  useEffect(() => {
    setSubject(data?.data[0].subjectList);
  }, [data]);

  // 수정 시 content에 데이터 넣기
  useEffect(() => {
    if (editPostData) {
      setContent(editPostData.content);
    } else {
      setContent("");
    }
  }, [editPostData]);

  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm<FormValues>();

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
  const formSubmit: SubmitHandler<FormValues> = (data) => {
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
      const editData = {
        _id: editPostData._id,
        title: data.title,
        subject: data.subject,
        subSubject: data.subSubject,
        content: content,
      };

      // 1.주제 추가
      axios
        .post("http://localhost:8080/write/addTitle", subjectData)
        .then((res) => {
          console.log(res.data);
          // 2.포스터 추가 (수정/새로운 글)

          if (editPostData) {
            axios
              .put("http://localhost:8080/post/edit", editData)
              .then((res) => {
                alert(res.data);
                setTimeout(() => {
                  navigater(0);
                }, 100);
              })
              .catch((err) => console.log(err));
          } else {
            axios
              .post("http://localhost:8080/write/addPost", postData)
              .then((res) => {
                alert(res.data);
                setTimeout(() => {
                  navigater(0);
                }, 100);
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }
  };

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
        <MainTitleWrapper>
          <Select
            aria-invalid={
              isSubmitted ? (errors.subject ? "true" : "false") : undefined
            }
            {...register("subject", {
              required: "* 필수 입력란입니다.",
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
