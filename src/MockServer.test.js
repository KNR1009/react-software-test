import React from "react";
import { findByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MockServer } from "./MockServer";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "Bred dummy" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

describe("mock API", () => {
  it("Fetch success should display fetched data correctly and button disable", async () => {
    render(<MockServer />);
    // APIコール
    await userEvent.click(screen.getByRole("button"));
    // 非同期処理後に該当の値が表示されているか
    expect(await screen.findByRole("heading")).toHaveTextContent("Bred dummy");
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });
});
