import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

let Form = ({
  click,
  change,
  obj = { value: 0 },
  needsRadioButton = false,
}) => {
  return (
    <form className='edit-form' onSubmit={(event) => event.preventDefault()}>
      <div>
        <div className='edit-data'>
          <label>Date: </label>
          <Input
            id='date'
            type='date'
            placeholder={obj.date}
            value={obj.date}></Input>
        </div>
        <div className='edit-data'>
          <label>Concept: </label>
          <Input id='concept' type='text' value={obj.concept}></Input>
        </div>
        <div className='edit-data'>
          <label>Amount: </label>
          <Input
            id='number'
            type='number'
            min='0'
            placeholder={obj.value}
            value={obj.value}></Input>
        </div>

        {needsRadioButton ? (
          <div className='edit-data'>
            <label>Type:</label>
            <div className='radio-button-wrappers'>
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
          </div>
        ) : null}
      </div>
      <div>
        <Button
          className='submit-button base-button'
          click={click}
          text='Submit'></Button>
      </div>
    </form>
  );
};

export default Form;
