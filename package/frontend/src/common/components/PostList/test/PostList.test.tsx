import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "../../../../store/store";
import PostList from "../container/PostList";
import PostListInfo from "../component/PostListInfo";

const queryClient = new QueryClient();

// Mock Data
const subject: string | undefined = "글 수정";

const mockPostListInfo = {
  title: "Test",
  date: 123,
  subject: "Subject Test",
  subSubject: "Subsubject Test",
  content: "<p>content</p>",
};

// PostList 렌더링
const renderPostList = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MemoryRouter>
          <PostList subject={subject} />
        </MemoryRouter>
      </Provider>
    </QueryClientProvider>,
  );
};

// PostListInfo 렌더링
const renderPostListInfo = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MemoryRouter>
          <PostListInfo post={mockPostListInfo} />
        </MemoryRouter>
      </Provider>
    </QueryClientProvider>,
  );
};

// PostList 테스트 진행
describe("PostList Test", () => {
  test("제목이 최신글인지, 글 수정인지 확인", () => {
    renderPostList();

    const tilteEl = screen.getByText("글 수정");
    expect(tilteEl).toBeInTheDocument();
  });

  test("컴포넌트 렌더링 테스트(데이터가 존재할 경우)", () => {
    renderPostListInfo();

    const titleElement1 = screen.getByText("Test");
    const subSubjectElement1 = screen.getByText("Subsubject Test");
    const dateElement1 = screen.getByText(new Date(123).toLocaleDateString());

    expect(titleElement1).toBeInTheDocument();
    expect(subSubjectElement1).toBeInTheDocument();
    expect(dateElement1).toBeInTheDocument();
  });
});
