import { Link } from "react-router-dom";
import { Div, Nav } from "../style/TopNav";
import { useState } from "react";
import SearchModal from "../component/SearchModal";
import IsAiSearch from "../component/IsAiSearch";

function TopNav() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);

  const toggleSearchModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleAiSearchModal = () => {
    setIsAiModalOpen(!isAiModalOpen);
  };

  return (
    <Nav>
      <Div>
        <a onClick={toggleSearchModal}>검색</a>
        <a onClick={toggleAiSearchModal}>음성</a>
        <Link to="/write">글작성</Link>
      </Div>

      {isModalOpen ? <SearchModal close={setIsModalOpen} /> : ""}
      {isAiModalOpen ? <IsAiSearch close={setIsAiModalOpen} /> : ""}
    </Nav>
  );
}

export default TopNav;
