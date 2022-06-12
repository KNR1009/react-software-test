import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Reviewing } from "./Reviewing";

// describe("render test", () => {
//   it("should render the elements", () => {
//     render(<Reviewing />);
//     // コンポーネント内にh1があるかテスト
//     expect(screen.getAllByRole("heading")).toBeTruthy();
//     // コンポーネント内にボタンがあるかテスト
//     expect(screen.getAllByRole("button")).toBeTruthy();
//     // コンポーネント内に入力フォームがあるかテスト
//     expect(screen.getByRole("textbox")).toBeTruthy();
//     // テストidを振った要素があるかのチェック
//     expect(screen.getByTestId("test")).toBeTruthy();
//   });
// });

// describe("userEvent Test", () => {
//   // 入力フォームにユーザーが入力した時のテスト
//   it("should update input value correctly", async () => {
//     render(<Reviewing></Reviewing>);
//     // 入力フォームに入力した値を取得
//     const inputValue = screen.getByPlaceholderText("input-value");
//     // "test"という文言を入力するユーザーイベント
//     await userEvent.type(inputValue, "test");
//     expect(inputValue.value).toBe("test");
//     // expect(screen.getByText("test")).toBeInTheDocument();
//   });
// });

// ボタンクリック時の挙動をテスト
describe("userEvent Button", () => {
  // 入力フォームに値がない場合はクリックしてもpropsの関数は発火しないテスト
  it("should button click not function", async () => {
    // propsで渡すmock関数
    const outputConsole = jest.fn();
    render(<Reviewing outputConsole={outputConsole} />);
    await userEvent.click(screen.getByRole("button"));
    expect(outputConsole).not.toHaveBeenCalled();
  });
  // 入力フォームに値がある場合はprops関数が実行されるテスト
  it("should button click function", async () => {
    const outputConsole = jest.fn();
    render(<Reviewing outputConsole={outputConsole}></Reviewing>);
    const inputValue = screen.getByPlaceholderText("input-value");
    // 入力フォームにデータを入れる
    await userEvent.type(inputValue, "test");
    // propsの関数が呼び出されるかをテスト
    await userEvent.click(screen.getByRole("button"));
    expect(outputConsole).toHaveBeenCalled();
  });
});
