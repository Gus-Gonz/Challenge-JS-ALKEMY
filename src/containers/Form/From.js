import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

let Form = ({ click }) => {
  return (
    <div className='form'>
      <Input placeholder='Modify the budget' class='main-input' />
      <Button class='main-button' click={click} text='Add' />
    </div>
  );
};

export default Form;
