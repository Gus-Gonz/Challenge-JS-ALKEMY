const ItemResume = ({
  amount,
  style,
  date,
  concept,
  labelConcept,
  className,
}) => {
  return (
    <div className={className}>
      <div className='concept-info'>
        <label>{labelConcept}</label>
        <p>{concept}</p>
      </div>
      <div className='date-amount-info'>
        <p>{date}</p>
        <p style={style}>Amount: {amount}</p>
      </div>
    </div>
  );
};

export default ItemResume;
