import Nav from './Nav';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header-wrapper ">
      <img className="logo-img" src={Logo} alt="Little Lemon"/>
      <Nav />
    </header>
  );
}

export default Header;