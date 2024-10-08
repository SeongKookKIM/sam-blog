import { Route, Routes } from "react-router-dom";
import { Content, Main } from "../style/App";
import { Suspense, lazy, useEffect } from "react";
import Menu from "../../../common/components/Menu/container/Menu";
import TopNav from "../../../common/components/TopNav/container/Topnav";
import Home from "../../Home/container/Home";

// Lazy Import
const Write = lazy(() => import("../../Write/container/Write"));
const SubjectPost = lazy(
  () => import("../../SubjectPost/container/SubjectPost"),
);
const Search = lazy(() => import("../../Search/container/Search"));
const PostDetail = lazy(() => import("../../PostDetail/container/PostDetail"));

function App() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <Main>
        {/* Menu */}
        <Menu />
        <Content>
          {/* 상단 Bar */}
          <TopNav />
          {/* 본문 Router */}
          <Suspense
            fallback={
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>페이지 로딩중입니다.</span>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/write" element={<Write />} />
              <Route path="/subjectList/:id" element={<SubjectPost />} />
              <Route path="/search/:term" element={<Search />} />
              <Route path="/detail/:title" element={<PostDetail />} />
              <Route path="/write/edit" element={<Write />} />
            </Routes>
          </Suspense>
        </Content>
      </Main>
    </>
  );
}

export default App;
