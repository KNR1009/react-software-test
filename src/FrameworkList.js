import React from "react";

export const FrameworkList = (props) => {
  /* propsがない場合と配列の要素が0の場合は */
  if (!props.frameworks || !props.frameworks.length) {
    return <h1>No data !</h1>;
  }
  return (
    <div>
      <ul>
        {props.frameworks.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FrameworkList;
