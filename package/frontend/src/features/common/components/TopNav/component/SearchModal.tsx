import { useRef, useState } from "react";
import { Button } from "../../../styles/Buttons";
import { Input } from "../../../styles/Input";
import { ModalWrapper, SearchBox } from "../style/SearchModal";
import { useNavigate } from "react-router-dom";

interface IClosePorps {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchModal({ close }: IClosePorps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const SearchInputRef = useRef<HTMLInputElement | null>(null);

  const navigator = useNavigate();

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

  return (
    <ModalWrapper>
      <SearchBox>
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
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyUp={hanlderKeyUp}
        />
        <div>
          <Button type="button" onClick={() => close(false)}>
            취소하기
          </Button>
          <Button type="button" onClick={onClickSearchBtn}>
            검색하기
          </Button>
        </div>
      </SearchBox>
    </ModalWrapper>
  );
}

export default SearchModal;
