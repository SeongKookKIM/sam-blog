import { render, screen } from "@testing-library/react";
import Menu from "../container/Menu";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "../../../../store/store";
import userEvent from "@testing-library/user-event";
// eslint-disable-next-line

const queryClient = new QueryClient();

// Menu 렌더링
const renderMenu = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MemoryRouter>
          <Menu />
        </MemoryRouter>
      </Provider>
    </QueryClientProvider>,
  );
};

//  userEvent셋팅
const user = userEvent.setup();

// 메뉴 테스트
describe("Menu Test", () => {
  test("메뉴 토글 버튼 클릭 시 메뉴가 표시/숨김 되는지 확인", async () => {
    renderMenu();

    const toggleEl = screen.getByTestId("toggle-test");

    const showButton = screen.getByTestId("toggle-btn");
    await user.click(showButton);
    expect(toggleEl).toHaveClass("menu-show");

    const hideButton = screen.getByTestId("toggle-btn");
    await user.click(hideButton);
    expect(toggleEl).not.toHaveClass("menu-show");
  });

  test("renders subject list correctly", () => {
    const mockData = {
      data: [
        {
          subjectList: [
            "React",
            "JavaScript",
            "TypeScript",
            "Vue",
            "Angular",
            "Node.js",
          ],
        },
      ],
    };

    jest.fn().mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
      error: null,
    });

    renderMenu();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(6);

    const subjectTexts = listItems.map((item) => item.textContent);
    const expectedSubjects = [
      "123(0)",
      "234(0)",
      "12a(0)",
      "w(0)",
      "QWER(0)",
      "블로그(0)",
    ];
    expect(subjectTexts).toEqual(expectedSubjects);
  });
});
