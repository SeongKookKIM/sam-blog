import { Link } from "react-router-dom";
import { Div, Nav } from "./style/TopNav";

function TopNav() {
  return (
    <Nav>
      <Div>
        <Link to="/">검색</Link>
        <Link to="/">음성</Link>
        <Link to="/write">글작성</Link>
      </Div>
    </Nav>
  );
}

export default TopNav;
