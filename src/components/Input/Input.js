let Input = (props) => {
  return (
    <input
      id={props.id}
      onChange={props.change}
      name={props.name}
      min={props.min}
      max={props.max}
      className={props.class}
      placeholder={props.placeholder}
      type={props.type}
      defaultValue={props.value}></input>
  );
};

export default Input;
