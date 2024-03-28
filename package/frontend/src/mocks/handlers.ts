import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:8080/write/passwordChcked", (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200), ctx.json("접속에 성공하셨습니다."));
  }),
];
