import React from "react";
import styled from "styled-components";

/* テストの復習用 */
export const Reviewing = () => {
  return (
    <>
      <Title>タイトルです</Title>
      <Button>ボタンです</Button>
      <input type={"text"}></input>
      <div data-testid="test">テストidの要素です</div>
    </>
  );
};

const Title = styled.h1`
  color: red;
`;

const Button = styled.button``;
