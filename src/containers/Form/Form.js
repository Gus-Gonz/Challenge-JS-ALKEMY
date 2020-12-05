import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

let Form = ({
  click,
  change,
  obj = { value: 0 },
  needsRadioButton = false,
}) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Input type='number' min='0' placeholder={obj.value}></Input>
      {needsRadioButton ? (
        <div>
          <label>
            <Input
              change={change}
              name='resume-type'
              type='radio'
              value='Income'></Input>
            Income
          </label>
          <label>
            <Input
              change={change}
              name='resume-type'
              type='radio'
              value='Expenses'></Input>
            Expenses
          </label>
        </div>
      ) : null}
      <Button click={click} text='Submit'></Button>
    </form>
  );
};

export default Form;
