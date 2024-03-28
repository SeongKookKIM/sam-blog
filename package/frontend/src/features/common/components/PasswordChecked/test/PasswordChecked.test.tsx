import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PasswordChecked from "../container/PasswordChecked";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";
import { server } from "../../../../../mocks/server";
import { rest } from "msw";

const queryClient = new QueryClient();

// MSW 목업 사용해서 API 결과 값 테스트

describe("패스워드 패스 테스트", () => {
  //  userEvent셋팅
  const user = userEvent.setup();

  // Window.alert 모킹
  window.alert = jest.fn();

  // PasswordChecked컴포넌트 렌더링
  const renderPasswordChecked = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <PasswordChecked />
        </MemoryRouter>
      </QueryClientProvider>,
    );
  };

  //   Password 입력시 통과 테스트
  test("비밀번호가 제대로 입력되었을 때 POST 요청을 보내는지 확인", async () => {
    // Passwordchecked컴포넌트 렌더링 함수
    renderPasswordChecked();

    // 패스워드 input, 입력 버튼 찾기
    const passwordInput = screen.getByTestId("password-test");
    const submitButton = screen.getByText("입력");

    //input에 테스트 값이 들어갔을 경우 버튼을 누르면 통과 하게 테스트
    await user.type(passwordInput, "1234");
    await user.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith("접속에 성공하셨습니다.");
  });

  //   password 틀렸을 경우 테스트
  test("비밀번호가 틀렸을떄 에러 테스트", async () => {
    server.use(
      rest.post(
        "http://localhost:8080/write/passwordChcked",
        (req, res, ctx) => {
          console.log(req);
          return res(ctx.status(500));
        },
      ),
    );

    // Passwordchecked컴포넌트 렌더링 함수
    renderPasswordChecked();

    // 패스워드 input, 입력 버튼 찾기
    const passwordInput = screen.getByTestId("password-test");
    const submitButton = screen.getByText("입력");

    //input에 테스트 값이 들어갔을 경우 버튼을 누르면 통과 하게 테스트
    await user.type(passwordInput, "1234");
    await user.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith("비밀번호가 일치하지 않습니다.");
  });

  //   Input이 빈값일때 테스트
  test("비밀번호를 입력하지 않을경우 테스트", async () => {
    // Passwordchecked컴포넌트 렌더링 함수
    renderPasswordChecked();

    // 패스워드 input, 입력 버튼 찾기
    const submitButton = screen.getByText("입력");

    //input에 테스트 값이 없을 경우 버튼을 누르면 통과 하게 테스트
    await user.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith("비밀번호를 입력해주세요.");
  });
});
