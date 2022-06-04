import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

describe("rendering", () => {
  it("Should render the elements correctly", () => {
    render(<Render />);
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
  });
});
