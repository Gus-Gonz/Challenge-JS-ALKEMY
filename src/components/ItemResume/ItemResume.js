const ItemResume = ({ amount, style, date, concept }) => {
  return (
    <div>
      <p>{date}</p>
      <p>{concept}</p>
      <p style={style}>Amount: {amount}</p>
    </div>
  );
};

export default ItemResume;
