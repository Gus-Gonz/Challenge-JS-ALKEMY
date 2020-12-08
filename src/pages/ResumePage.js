import { Link } from 'react-router-dom';


import Header from '../containers/Header/Header';
import ResumeTable from '../containers/ResumeTable/ResumeTable';
import H1 from '../components/H1/H1';
import Button from '../components/Button/Button'


const ResumePage = ({ resumeList, resumeNum }) => {
  return (
    <section>
      <Header></Header>
      <Link to={'/adding'}><Button className='add-task-button base-button' text="+"></Button></Link>
      <H1 text={`Current Balance: ${resumeNum}`}></H1>
      <ResumeTable resumeList={resumeList}></ResumeTable>
    </section>
  );
};

export default ResumePage;
