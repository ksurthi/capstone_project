import { NavLink } from 'react-router-dom';
import  HeroImage from '../../../images/restauranfood.jpg';
import './Hero.css';

const Hero = () => {
  return (
  <div className="hero">
    <div className="hero-container">
      <div className="hero-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <NavLink to="/reservation">
          <button className="btn">Reserve a Table</button>
        </NavLink>
        </div>
      <div className="hero-right">
        <div className="hero-image">
          <img src={HeroImage} alt="Serving delicious food" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;