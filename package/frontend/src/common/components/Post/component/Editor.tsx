import { useMemo, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import { PostContentWrapper } from "../style/Editor";
import styles from "../style/editor.module.css";

// react-quill Image Resizing
import { ImageActions } from "@xeger/quill-image-actions";
import { ImageFormats } from "@xeger/quill-image-formats";
// import uploadToS3 from "../../../../hooks/UploadToS3";
import axios from "axios";
Quill.register("modules/imageActions", ImageActions);
Quill.register("modules/imageFormats", ImageFormats);

interface IContentProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

function Editor({ content, setContent }: IContentProps) {
  const quillRef = useRef<ReactQuill | null>(null);

  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file: File | undefined = input.files?.[0];

      if (file) {
        try {
          const imageUpload = new FormData();
          imageUpload.append("file", file as File);

          const imgUrl = await axios.post(
            "http://localhost:8080/write/uploadImage",
            imageUpload,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            },
          );

          const editor = quillRef.current!.getEditor();
          const range = editor.getSelection();
          editor.insertEmbed(range!.index, "image", imgUrl);
          editor.setSelection(range!.index + 1, 0);
        } catch (error) {
          console.log(error);
        }
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
