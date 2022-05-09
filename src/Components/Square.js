const Square = ({ onClick, value }) => {
  const style = {
    background: "white",
    color: "crimson",
    border: "2px solid black",
    fontSize: "45px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none",
  };
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
