const Button = ({ style, text, className, click }) => {
  return (
    <button style={style} className={className} onClick={click}>
      {text}
    </button>
  );
};

export default Button;
