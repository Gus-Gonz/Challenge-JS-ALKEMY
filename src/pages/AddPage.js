import Header from '../containers/Header/Header';
import AddForm from '../containers/Form/Form';
import ResumeTable from '../containers/ResumeTable/ResumeTable';
import H1 from '../components/H1/H1';

const AddPage = ({ sumitHandler }) => {
  let isIncome;

  const clickHandler = (event) => {
    const form = event.target.closest('form');

    if (form.querySelector('#number').value === '') {
      return alert('you need to put a number');
    } else if (isIncome === undefined) {
      return alert(
        'Sorry but you will need to specify if it it an Income or not '
      );
    }
    const dateValue = form.querySelector('#date').value;
    const conceptValue = form.querySelector('#concept').value.trim();

    return sumitHandler(event, isIncome, dateValue, conceptValue);
  };

  const changeHandler = (event) => {
    const radioButtonHandler = (event) => {
      if (event.target.value === 'Income') {
        return (isIncome = true);
      } else {
        return (isIncome = false);
      }
    };
    return radioButtonHandler(event);
  };

  return (
    <section>
      <Header></Header>
      <div className='edit-element'>
        <AddForm
          needsRadioButton={true}
          click={(event) => clickHandler(event)}
          change={(event) => changeHandler(event)}></AddForm>
      </div>
    </section>
  );
};
export default AddPage;
