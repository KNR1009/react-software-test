import React, { useState } from "react";
import styled from "styled-components";

/* テストの復習用 */
export const Reviewing = ({ frameworks }) => {
  /* propsがない場合と配列の要素が0の場合は */
  if (!frameworks || !frameworks.length) {
    return <h1>No data !</h1>;
  }
  return (
    <div>
      <ul>
        {frameworks.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
