import React from "react";

const Square = (props) => {
  return (
    <div onClick={props.onClick}
      style={{
        border: "1px solid ",
        height: "100px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="square"
    >
      <h1>{props.value}</h1>
    </div>
  );
};

export default Square;
