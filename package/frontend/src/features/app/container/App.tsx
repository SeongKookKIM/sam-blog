import { Route, Routes } from "react-router-dom";
import Menu from "../../common/components/Menu/container/Menu";
import TopNav from "../../common/components/TopNav/container/Topnav";
import { Content, Main } from "../style/App";
import Home from "../../Home/container/Home";
import Write from "../../Write/container/Write";
import SubjectPost from "../../SubjectPost/container/SubjectPost";

function App() {
  return (
    <Main>
      {/* Menu */}
      <Menu />
      <Content>
        {/* 상단 Bar */}
        <TopNav />
        {/* 본문 Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/subjectList/:id" element={<SubjectPost />} />
        </Routes>
      </Content>
    </Main>
  );
}

export default App;
