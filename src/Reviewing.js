import React, { useState } from "react";
import styled from "styled-components";

/* テストの復習用 */
export const Reviewing = ({ outputConsole }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    if (value !== "") {
      // 入力フォームにデータが入っていれば呼び出される
      outputConsole(value);
    }
  };

  return (
    <>
      <input onChange={onChange} placeholder="input-value" />
      {/* {value !== "" && <h1>{value}</h1>} */}
      <button onClick={onClick}>クリック</button>
    </>
  );
};
