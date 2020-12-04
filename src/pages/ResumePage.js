import Header from '../containers/Header/Header';
import Form from '../containers/Form/From';
import ResumeTable from '../containers/ResumeTable/ResumeTable';
import H1 from '../components/H1/H1';

const ResumePage = ({ resumeList, resumeNum }) => {
  return (
    <section>
      <Header></Header>
      <Form></Form>
      <H1 text={`Current Balance: ${resumeNum}`}></H1>
      <ResumeTable resumeList={resumeList}></ResumeTable>
    </section>
  );
};

export default ResumePage;
