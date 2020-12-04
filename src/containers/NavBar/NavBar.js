import ItemNavBar from '../../components/ItemNavBar/ItemNavBar';
import { Link } from 'react-router-dom';

let NavBar = ({ activeTabObj }) => {
  return (
    <nav>
      <Link to={'/'}>
        <ItemNavBar>Resume</ItemNavBar>
      </Link>
      <Link to={'/income'}>
        <ItemNavBar>Incomes</ItemNavBar>
      </Link>
      <Link to={'/expenses'}>
        <ItemNavBar>Expenses</ItemNavBar>
      </Link>
    </nav>
  );
};

export default NavBar;
