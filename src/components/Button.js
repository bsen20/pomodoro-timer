const Button = ({ title, activeClass, _callback, color }) => {
  return (
    <button
      className={activeClass}
      onClick={_callback}
      style={activeClass !== undefined ? { backgroundColor: color } : {}}
    >
      {title}
    </button>
  );
};
export default Button;
