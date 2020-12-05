import Header from '../containers/Header/Header';
import AddForm from '../containers/Form/Form';
import ResumeTable from '../containers/ResumeTable/ResumeTable';
import H1 from '../components/H1/H1';

const AddPage = ({ sumitHandler }) => {
  let isIncome;

  const clickHandler = (event) => {
    if (event.target.closest('form').querySelector('input').value === '') {
      return alert('you need to put a number');
    } else if (isIncome === undefined) {
      return alert(
        'Sorry but you will need to specify if it it an Income or not '
      );
    }
    return sumitHandler(event, isIncome);
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
      <AddForm
        needsRadioButton={true}
        click={(event) => clickHandler(event)}
        change={(event) => changeHandler(event)}></AddForm>
    </section>
  );
};
export default AddPage;
