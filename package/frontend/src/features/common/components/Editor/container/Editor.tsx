import { useMemo, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

import { PostContentWrapper } from "../style/Editor";
import styles from "../style/editor.module.css";

import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../../../utils/firebase";

interface IContentProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

function Editor({ content, setContent }: IContentProps) {
  const quillRef = useRef<ReactQuill | null>(null);

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const editor = quillRef.current!.getEditor();
      const file = input.files?.[0];
      const range = editor?.getSelection(true);
      try {
        // 파일명을 "image/Date.now()"로 저장
        const storageRef = ref(storage, `image/${Date.now()}`);
        // Firebase Method : uploadBytes, getDownloadURL
        await uploadBytes(storageRef, file as File).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            // 이미지 URL 에디터에 삽입
            editor?.insertEmbed(range!.index, "image", url);
            // URL 삽입 후 커서를 이미지 뒷 칸으로 이동
            editor?.setSelection(range.index + 1, 0);
          });
        });
      } catch (error) {
        console.log(error);
      }
    });
  };
  console.log(imageHandler);

  // quill에서 사용할 모듈
  // useMemo를 사용하여 modules가 렌더링 시 에디터가 사라지는 버그를 방지
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image"],
        ],
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
      />
    </PostContentWrapper>
  );
}

export default Editor;
