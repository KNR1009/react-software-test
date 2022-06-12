import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Reviewing } from "./Reviewing";

describe("render test", () => {
  it("should render the elements", () => {
    render(<Reviewing />);
    // コンポーネント内にh1があるかテスト
    expect(screen.getAllByRole("heading")).toBeTruthy();
    // コンポーネント内にボタンがあるかテスト
    expect(screen.getAllByRole("button")).toBeTruthy();
    // コンポーネント内に入力フォームがあるかテスト
    expect(screen.getByRole("textbox")).toBeTruthy();
    // テストidを振った要素があるかのチェック
    expect(screen.getByTestId("test")).toBeTruthy();
  });
});
