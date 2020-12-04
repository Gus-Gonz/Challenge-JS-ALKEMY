import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

let EditForm = ({ click, change, obj }) => {
    // let isItIncome = (event) => {event.target.value === 'Income' ? true : false };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h3>Let's edit It!! </h3>
      <Input type='number' min='0' placeholder={obj.value}></Input>
      <div>
        <label>
          <Input
            change={change}
            wasselected={false}
            name='resume-type'
            type='radio'
            value='Income'></Input>
          Income
        </label>
        <label>
          <Input
            wasselected={false}
            change={change}
            name='resume-type'
            type='radio'
            value='Expenses'></Input>
          Expenses
        </label>
      </div>
      <Button click={click} text='Submit'></Button>
    </form>
  );
};

export default EditForm;
