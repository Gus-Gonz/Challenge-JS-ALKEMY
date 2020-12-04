let Input = (props) => {
  return (
    <input
      onChange={props.change}
      name={props.name}
      min={props.min}
      className={props.class}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}></input>
  );
};

export default Input;
