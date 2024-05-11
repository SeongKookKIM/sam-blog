import { Link } from "react-router-dom";
import { Div, Nav } from "../style/TopNav";
import { useState } from "react";
import SearchModal from "../component/SearchModal";

function TopNav() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleSearchModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Nav>
        <Div>
          <p onClick={toggleSearchModal}>검색</p>
          <Link to="/write">글작성</Link>
        </Div>
      </Nav>
      {isModalOpen ? <SearchModal close={setIsModalOpen} /> : ""}
    </>
  );
}

export default TopNav;
