import Logo  from '../images/Logo.svg';

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Little Lemon"/>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <span>
        <span>Contact</span>
        <span>Address</span>
        <span>Phone Number</span>
        <span>Email</span>
      </span>
      <span>
        <span>Social Media Links</span>
      </span>
    </footer>
  );
}

export default Footer;