import { render, screen } from "@testing-library/react";
import AddPostForm from "../container/AddPostForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "../../../../store/store";
import { MemoryRouter } from "react-router-dom";
import { TEditPostType } from "../../../../types/postType";

const queryClient = new QueryClient();

const data: TEditPostType = {
  _id: "123",
  title: "123",
  date: 1123,
  subject: "123",
  subSubject: "123",
  content: "123",
};

// Menu 렌더링
const renderPost = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MemoryRouter>
          <AddPostForm editPostData={data} />
        </MemoryRouter>
      </Provider>
    </QueryClientProvider>,
  );
};

describe("Post data", () => {
  test("renders form elements correctly", async () => {
    renderPost();

    // Check if form elements are rendered
    expect(screen.getByLabelText("제목")).toBeInTheDocument();
    expect(screen.getByLabelText("메인 주제")).toBeInTheDocument();
    expect(screen.getByLabelText("서브 주제")).toBeInTheDocument();
    expect(screen.getByText("추가")).toBeInTheDocument();
  });
});
