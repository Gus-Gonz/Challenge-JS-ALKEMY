let Input = (props) => {
  return (
    <input
      onChange={props.change}
      waselected = {props.wasSelected}
      name={props.name}
      min={props.min}
      className={props.class}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}></input>
  );
};

export default Input;
