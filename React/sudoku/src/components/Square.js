// export const Square = (props) => {
//   return (
//     <button>{props.value}</button>
//   )
// }

const styles = {
  background: "#fff",
  border: "1px solid #999",
  fontSize: "70px",
  fontWeight: "bold",
  lineHeight: "34px",
  height: "100px",
  marginRight: "-5px",
  marginTop: "-5px",
  padding: 0,
  textAlign: "center",
  width: "100px",
};

export const Square = ({ value, setValue }) => {
  return (
    <button onClick={() => setValue()} style={styles}>
      {value}
    </button>
  );
};
