import React, { useState } from "react";

// export const Square = (props) => {
//   return (
//     <button>{props.value}</button>
//   )
// }

const styles = {
  background: "#fff",
  border: "1px solid #999",
  float: "left",
  fontSize: "24px",
  fontWeight: "bold",
  lineHeight: "34px",
  height: "34px",
  marginRight: "-1px",
  marginTop: "-1px",
  padding: 0,
  textAlign: "center",
  width: "34px",
};

export const Square = ({ value, setValue }) => {
  return (
    <button onClick={() => setValue("X")} style={styles}>
      {value}
    </button>
  );
};
