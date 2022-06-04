import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "./RenderInput";

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<RenderInput />);
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
});

describe("input form onChange event", () => {
  it("should update input value correctly", async () => {
    render(<RenderInput></RenderInput>);
    const inputValue = screen.getByPlaceholderText("Enter");
    await userEvent.type(inputValue, "test");
    expect(inputValue.value).toBe("test");
  });
});

describe("console button", () => {
  /* stateが空の場合は呼び出されない */
  it("should not trigger output function", async () => {
    /* propsで送られてくる想定のmock関数 */
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole}></RenderInput>);
    await userEvent.click(screen.getByRole("button"));
    expect(outputConsole).not.toHaveBeenCalled();
  });
  /* stateにデータが入っている場合はpropsの関数を呼び出し */
  it("should trigger output function", async () => {
    /* propsで送られてくる想定のmock関数 */
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole}></RenderInput>);
    const inputValue = screen.getByPlaceholderText("Enter");
    /* 入力フォームにデータを入れることでstateの値が変わる */
    await userEvent.type(inputValue, "test");
    /* stateにデータが入っている場合はpropsの関数を呼び出し */
    await userEvent.click(screen.getByRole("button"));
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
