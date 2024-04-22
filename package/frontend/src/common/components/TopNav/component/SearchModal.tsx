import { useEffect, useRef, useState } from "react";
import { Button } from "../../../styles/Buttons";
import { Input } from "../../../styles/Input";
import {
  SearchInputWrapper,
  ModalWrapper,
  SearchBox,
} from "../style/SearchModal";
import { useNavigate } from "react-router-dom";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

interface IClosePorps {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchModal({ close }: IClosePorps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const SearchInputRef = useRef<HTMLInputElement | null>(null);
  const [transcriptDisplayed, setTranscriptDisplayed] =
    useState<boolean>(false);

  const navigator = useNavigate();

  // react-speech-recognition
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // 음성 검색 종료 시
  useEffect(() => {
    if (!listening && transcript.trim() !== "") {
      setSearchTerm(transcript);
      setTranscriptDisplayed(true);
    }
  }, [listening, transcript]);

  // 마이크가 꺼졌을 때 검색 실행
  useEffect(() => {
    if (!listening && transcript.trim() !== "" && transcriptDisplayed) {
      setSearchTerm(transcript);
      onClickSearchBtn();
      resetTranscript();
      setTranscriptDisplayed(false);
    }
    // eslint-disable-next-line
  }, [transcriptDisplayed]);

  // 검색 버튼 클릭시 POST 검색
  const onClickSearchBtn = () => {
    if (searchTerm !== "") {
      navigator(`/search/${searchTerm}`);
      close(false);
    } else {
      alert("검색어를 입력해주세요.");
      SearchInputRef.current!.focus();
    }
  };

  // Enter 클릭시 검색기능
  const hanlderKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSearchBtn();
    }
  };

  // 브라우저에서 음성지원 안될경우
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <ModalWrapper>
      <SearchBox>
        <SearchInputWrapper>
          {listening ? (
            <Input
              width={"100%"}
              type="text"
              value={transcript}
              style={{
                height: "40px",
                border: "2px solid black",
                padding: "0 5px",
                position: "absolute",
              }}
            />
          ) : (
            <Input
              width={"100%"}
              placeholder="검색어를 입력해주세요."
              type="text"
              name="search"
              ref={SearchInputRef}
              style={{
                height: "40px",
                border: "2px solid black",
                padding: "0 5px",
                position: "absolute",
              }}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onKeyUp={hanlderKeyUp}
            />
          )}
        </SearchInputWrapper>
        <div>
          <Button type="button" onClick={onClickSearchBtn}>
            검색하기
          </Button>
          <Button
            type="button"
            style={{
              backgroundColor: listening ? "#96ccfe" : "white",
              color: listening ? "white" : "black",
              border: listening ? "1px solid white" : "1px solid black",
            }}
            onClick={() => {
              SpeechRecognition.startListening();
            }}
          >
            음성검색 {listening ? "on" : "off"}
          </Button>

          <Button type="button" onClick={() => close(false)}>
            취소하기
          </Button>
        </div>
      </SearchBox>
    </ModalWrapper>
  );
}

export default SearchModal;
