import { render, screen } from "@testing-library/react";
import Menu from "../Menu";
import { MemoryRouter } from "react-router-dom";
// import Menu from "../Menu";

test("data 확인", () => {
  render(
    <MemoryRouter>
      <Menu />
    </MemoryRouter>,
  );
  const dataEl = screen.getByText(/sam/i);
  expect(dataEl).toBeInTheDocument();
});

test("리스트가 잘 나온다.(3개)", () => {
  render(
    <MemoryRouter>
      <Menu />
    </MemoryRouter>,
  );
  const listEl = screen.queryAllByRole("list");
  expect(listEl).toHaveLength(3);
});
