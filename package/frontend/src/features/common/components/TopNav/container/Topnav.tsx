import { Link } from "react-router-dom";
import { Div, Nav } from "../style/TopNav";
import { useState } from "react";
import SearchModal from "../component/SearchModal";

function TopNav() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Nav>
      <Div>
        <a onClick={toggleModal}>검색</a>
        <Link to="/">음성</Link>
        <Link to="/write">글작성</Link>
      </Div>

      {isModalOpen ? <SearchModal close={setIsModalOpen} /> : ""}
    </Nav>
  );
}

export default TopNav;
