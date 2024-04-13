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

  const onClickSearchBtn = () => {
    if (searchTerm !== "") {
      navigator(`/search/${searchTerm}`);
      close(false);
    } else {
      alert("검색어를 입력해주세요.");
      SearchInputRef.current!.focus();
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
