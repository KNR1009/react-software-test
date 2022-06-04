import React from "react";
import { render, screen } from "@testing-library/react";
import FrameworkList from "./FrameworkList";

describe("Render the lits with props", () => {
  it("Should render No Data ! when no data propped", () => {
    /* propsで配列を渡していない場合はNo dateが表示されることをテスト */
    render(<FrameworkList></FrameworkList>);
    expect(screen.getByText("No data !")).toBeInTheDocument();
  });

  it("Should render", () => {
    /* 受け渡す配列のダミー */
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
    /* propsで配列を渡す場合 */
    render(<FrameworkList frameworks={dummyData}></FrameworkList>);
    /* liの中に表示されるもの取得し配列へ */
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((el) => el.textContent);
    const dummyItems = dummyData.map((el) => el.item);
    expect(frameworkItems).toEqual(dummyItems);
  });
});
