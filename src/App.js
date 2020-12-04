import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ItemResume from './components/ItemResume/ItemResume';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

import ResumePage from './pages/ResumePage';
import IncomePage from './pages/IncomePage';
import ExprensesPage from './pages/ExprensesPage';

function App() {
  const [resumeList, setResumeList] = useState([
    { id: 1, value: 1000, isIncome: false },
    { id: 2, value: 1000, isIncome: true },
    { id: 3, value: 1000, isIncome: true },
    { id: 2, value: 1000, isIncome: true },
  ]);


  const creatingJsxResumeList = (list) => {
    return list.map((eachObj) => {
      return (
        <li>
          <ItemResume
            style={eachObj.isIncome ? { color: 'green' } : { color: 'red' }}
            key={eachObj.id}
            text={eachObj.value}></ItemResume>
          <Button
            click={(event) => {
              editResumeElementHandler(event, eachObj);
            }}
            text='Edit'></Button>
          <Button text='Delete'></Button>
        </li>
      );
    });
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
                resumeList={creatingJsxResumeList(resumeList)}></ResumePage>
            )}
          />
          <Route path='/income' render={() => <IncomePage></IncomePage>} />
          <Route
            path='/expenses'
            render={() => <ExprensesPage></ExprensesPage>}
          />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
