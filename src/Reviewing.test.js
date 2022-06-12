import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Reviewing } from "./Reviewing";
import FrameworkList from "./FrameworkList";

describe("useEffect rendering", () => {
  it("Should render only after async function resolved", async () => {
    render(<Reviewing />);
    expect(screen.queryByText(/I am /)).toBeNull();
    expect(await screen.findByText(/I am /)).toBeInTheDocument();
  });
});
