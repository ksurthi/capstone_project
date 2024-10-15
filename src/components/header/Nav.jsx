import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const scrollToSection = (id) => {
    let elm = document.getElementById(id);
    if(elm) {
      window.scrollTo({
        top: document.getElementById(id).offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="nav-wrapper">
      <ul className="nav-items">
        <li><NavLink to="/">Home</NavLink></li>
        <li onClick={() => setTimeout(scrollToSection, 100, 'about')}><NavLink to="/">About</NavLink></li>
        <li onClick={() => setTimeout(scrollToSection, 100, 'highlights')}><NavLink to="/">Menu</NavLink></li>
        <li><NavLink to="/reservation">Reservations</NavLink></li>
        <li><NavLink to="/">Order Online</NavLink></li>
        <li><NavLink to="/">Login</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;