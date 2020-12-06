import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ItemResume from './components/ItemResume/ItemResume';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import EditForm from './containers/Form/Form';

import ResumePage from './pages/ResumePage';
import AddPage from './pages/AddPage';
import ExprensesPage from './pages/ExprensesPage';

function App() {
  const [resumeList, setResumeList] = useState([
    {
      id: 1,
      value: 9999,
      date: '2020-03-17',
      concept: 'New Phone',
      isIncome: false,
      edit: false,
    },
    {
      id: 2,
      value: 1000,
      date: '2020-02-14',
      concept: 'Won the lotery',
      isIncome: true,
      edit: false,
    },
    {
      id: 3,
      value: 1000,
      date: '2020-04-21',
      concept: 'Sold my old phone',
      isIncome: true,
      edit: false,
    },
    {
      id: 4,
      value: 1000,
      date: '2020-05-31',
      concept: 'Worked as Uber',
      isIncome: true,
      edit: false,
    },
  ]);

  const sumitEditForm = (
    event,
    obj,
    isIncomeValue = obj.isIncome,
    dateValue = obj.date
  ) => {
    const newResumeList = [...resumeList];

    const inputValue = event.target.closest('form').querySelector('#number')
      .value;
    const resumeElementIndex = newResumeList.findIndex((element) => {
      return obj.id === element.id;
    });
    const newResumeELement = { ...newResumeList[resumeElementIndex] };

    newResumeELement.value = parseInt(inputValue);
    newResumeELement.isIncome = isIncomeValue;
    newResumeELement.edit = false;
    newResumeELement.date = dateValue;

    newResumeList[resumeElementIndex] = newResumeELement;
    setResumeList(newResumeList);
  };

  const editHandler = (event, obj) => {
    const newResumeList = [...resumeList];
    const resumeElementIndex = newResumeList.findIndex((element) => {
      return obj.id === element.id;
    });
    const newResumeELement = { ...newResumeList[resumeElementIndex] };

    if (newResumeELement.edit) {
      newResumeELement.edit = false;
    } else {
      newResumeELement.edit = true;
    }
    newResumeList[resumeElementIndex] = newResumeELement;
    setResumeList(newResumeList);
  };

  const deleteHandler = (objId) => {
    const newResumeList = resumeList.filter((element) => element.id !== objId);
    setResumeList(newResumeList);
  };

  const gettingResumeNum = (list) => {
    let sum = 0;
    list.forEach((element) => {
      return element.isIncome
        ? (sum = sum + element.value)
        : (sum = sum - element.value);
    });
    return sum;
  };

  const sumitAddHandler = (event, isIncomeValue, dateValue, conceptValue) => {
    const inputValue = parseInt(
      event.target.parentElement.querySelector('#number').value.trim()
    );
    const newResumeList = [...resumeList];

    const newResumeELement = {
      id: newResumeList[newResumeList.length - 1].id + 1,
      value: inputValue,
      date: dateValue,
      concept: conceptValue,
      isIncome: isIncomeValue,
      edit: false,
    };

    newResumeList.push(newResumeELement);
    setResumeList(newResumeList);

    event.target.parentElement.querySelector('input').value = '';
    event.target.closest('main').querySelector('nav').firstElementChild.click();
  };

  const creatingJsxResumeList = (list) => {
    let newList = list.length < 11 ? list : list.slice(list.length - 10);
    return newList.map((eachObj) => {
      let isIncome;

      const radioButtonHandler = (event) => {
        if (event.target.value === 'Income') {
          return (isIncome = true);
        } else {
          return (isIncome = false);
        }
      };

      return !eachObj.edit ? (
        <li key={eachObj.id}>
          <ItemResume
            style={eachObj.isIncome ? { color: 'green' } : { color: 'red' }}
            amount={eachObj.value}
            concept={eachObj.concept}
            date={eachObj.date}></ItemResume>
          <Button
            click={(event) => {
              editHandler(event, eachObj);
            }}
            text='Edit'></Button>
          <Button
            click={() => {
              deleteHandler(eachObj.id);
            }}
            text='Delete'></Button>
        </li>
      ) : (
        <li key={eachObj.id}>
          <EditForm
            change={(event) => radioButtonHandler(event)}
            click={(event) => {
              const value = event.target.closest('form').querySelector('#date')
                .value;
              let dateValue = value === '' ? eachObj.date : value;
              if (
                event.target.closest('form').querySelector('#number').value ===
                ''
              ) {
                return alert('you need to put a number');
              }

              return sumitEditForm(event, eachObj, isIncome, dateValue);
            }}
            obj={eachObj}></EditForm>
        </li>
      );
    });
  };

  return (
    <Router>
      <main>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <ResumePage
                resumeNum={gettingResumeNum(resumeList)}
                resumeList={creatingJsxResumeList(
                  resumeList
                ).reverse()}></ResumePage>
            )}
          />
          <Route
            path='/adding'
            render={() => <AddPage sumitHandler={sumitAddHandler}></AddPage>}
          />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
