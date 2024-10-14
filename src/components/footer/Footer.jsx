import Logo  from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-des">
            <img src={Logo} alt="Little Lemon logo" />
            <div className="opening-times">
              <h5>Sitemap</h5>
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </div>

            <div className="contact">
              <h5>Contact us</h5>
              <ul>
                <li>Tel: 123456789</li>
                <li>Email: customerservice@littlelemon.com</li>
              </ul>
            </div>

            <div className="locations">
              <h5>Locations</h5>
              <ul>
                <li>Chicago, IL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
        </div>
      </footer>
  );
}

export default Footer;