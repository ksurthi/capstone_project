import './About.css';
import Image1 from '../../../images/Mario and Adrian A.jpg';
import Image2 from '../../../images/Mario and Adrian b.jpg';
const About = () => {
  return (
    <div className="about">
    <div className="about-container">
      <div className="about-left">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Join us at our family owned Mediterranean restaurant, where every dish tells story of culture and tradition, blended with a modern twist for an unforgettable dining experience!
        </p>
      </div>
      <div className="about-right">
        <img src={Image1} alt="Serving delicious food" className="about1"/>
        <img src={Image2} alt="Serving delicious food" className='about2'/>
      </div>
    </div>
  </div>
  );
}

export default About;