import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Reviewing } from "./Reviewing";
import FrameworkList from "./FrameworkList";

describe("props lits test", () => {
  // propsからデータがこなかった場合
  it("should no props data", () => {
    render(<Reviewing></Reviewing>);
    expect(screen.getByText("No data !")).toBeInTheDocument();
  });
  // propsからデータが取れた場合
  it("should props data", () => {
    const dummyData = [
      {
        id: 1,
        item: "React dummy",
      },
      {
        id: 2,
        item: "Angular dummy",
      },
      {
        id: 3,
        item: "Vue dummy",
      },
    ];
    render(<Reviewing frameworks={dummyData}></Reviewing>);
    // 表示されているリストのデータを取得し配列に格納
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((el) => el.textContent);
    // propsで渡したデータのitemの値だけを取得し配列に格納
    const propsItems = dummyData.map((el) => el.item);
    expect(frameworkItems).toEqual(propsItems);
  });
});
