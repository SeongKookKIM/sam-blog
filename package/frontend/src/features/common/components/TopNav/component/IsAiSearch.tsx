import React from "react";
import "regenerator-runtime/runtime";
import { AiSearchWrapper } from "../style/IsAiModal";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
/*
react-speech-recognition 사용 시 sync/await나 제너레이터 함수를 사용할 때 필요한 런타임 환경이 제공되지 않아서 발생하는 오류 발생,
regenerator-runtime polyfill을 이렇게 추가하면 react-speech-recognition 라이브러리가 정상 작동할 수 있는 런타임 환경이 제공되어 regeneratorRuntime is not defined 오류가 해결될 것입니다.
*/

interface IAiClosePorps {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

function IsAiSearch({ close }: IAiClosePorps) {
  console.log(close);

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  console.log(transcript);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <AiSearchWrapper>
      <div>
        <p>asdasd</p>
        <p>asdasd</p>
      </div>
      <div>
        <input
          type="text"
          name="askInput"
          placeholder="궁금하신 내용을 검색해주세요."
        />
        <p>Microphone: {listening ? "on" : "off"}</p>
        <button type="button">입력</button>
        <button
          type="button"
          onClick={() => {
            SpeechRecognition.startListening();
          }}
        >
          Start
        </button>
        <button type="button" onClick={() => SpeechRecognition.stopListening()}>
          Stop
        </button>

        <p>{transcript}</p>
      </div>
    </AiSearchWrapper>
  );
}

export default IsAiSearch;
