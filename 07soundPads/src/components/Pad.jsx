const Pad = ({ id, color, on, toggle }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={on ? "on" : ""}
      onClick={() => toggle(id)}
    ></button>
  );
};

export default Pad;
