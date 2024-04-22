import { useMemo, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import { PostContentWrapper } from "../style/Editor";
import styles from "../style/editor.module.css";
import AWS from "aws-sdk";

// react-quill Image Resizing
import { ImageActions } from "@xeger/quill-image-actions";
import { ImageFormats } from "@xeger/quill-image-formats";
Quill.register("modules/imageActions", ImageActions);
Quill.register("modules/imageFormats", ImageFormats);

interface IContentProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

function Editor({ content, setContent }: IContentProps) {
  const quillRef = useRef<ReactQuill | null>(null);

  // 이미지 AWS S3 저장
  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      //이미지를 담아 전송할 file을 만든다
      const file = input.files?.[0];
      try {
        //업로드할 파일의 이름으로 Date 사용
        const name = Date.now();
        //생성한 s3 관련 설정들
        AWS.config.update({
          region: import.meta.env.VITE_AWS_S3_BUCKET_REGION,
          accessKeyId: import.meta.env.VITE_AWS_S3_BUCKET_ACCESS_KEY_ID,
          secretAccessKey: import.meta.env.VITE_AWS_S3_BUCKET_SECRET_ACCESS_KEY,
        });
        //앞서 생성한 file을 담아 s3에 업로드하는 객체를 만든다
        const upload = new AWS.S3.ManagedUpload({
          params: {
            Bucket: "sam-blog-image", //버킷 이름
            Key: `upload/${name}`,
            Body: file,
          },
        });
        //이미지 업로드 후
        //곧바로 업로드 된 이미지 url을 가져오기
        const IMG_URL = await upload.promise().then((res) => res.Location);
        //useRef를 사용해 에디터에 접근한 후
        //에디터의 현재 커서 위치에 이미지 삽입
        const editor = quillRef.current!.getEditor();
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range!.index, "image", IMG_URL);
        editor.setSelection(range!.index + 1, 0);
      } catch (error) {
        console.log(error);
      }
    });
  };

  // quill에서 사용할 모듈
  // useMemo를 사용하여 modules가 렌더링 시 에디터가 사라지는 버그를 방지
  const modules = useMemo(() => {
    return {
      imageActions: {},
      imageFormats: {},
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "+1" },
            { indent: "-1" },
          ],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image"],
        ],
        handlers: {
          image: imageHandler,
        },
        // 이미지 크기 조절
        ImageResize: {
          modules: ["Resize"],
        },
      },
    };
  }, []);

  return (
    <PostContentWrapper>
      <ReactQuill
        className={styles.contentBox}
        placeholder="내용을 입력해주세요."
        theme="snow"
        ref={quillRef}
        value={content}
        onChange={setContent}
        modules={modules}
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "align",
          "color",
          "background",
          "float",
          "height",
          "width",
        ]}
      />
    </PostContentWrapper>
  );
}

export default Editor;
