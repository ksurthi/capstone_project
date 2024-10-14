import './Testimonials.css';
import stock1 from '../../../images/stock1.jpg';
import stock2 from '../../../images/stock2.jpg';
import stock3 from '../../../images/stock3.jpg';
const Testimonials = () => {
  const testimonials = [
    {
      id: 100,
      image: stock1,
      stars: 4,
      name: "Jane Doe",
      review: "The food is really outstanding! Every meal we had was full of flavor and cooked to perfection."
    },
    {
      id: 101,
      image: stock2,
      stars: 4,
      name: "John Doe",
      review: "Hands down, some of the most delicious food I've eaten lately! They utilize only the freshest ingredients and ensure that each dish is properly prepared. The chicken skewers was very memorable. Must try!"
    },
    {
      id: 102,
      image: stock3,
      stars: 2,
      name: "Jenny Doe",
      review: "The menu has an extensive variety of options, and everything we tried was great. I really enjoyed the creative takes on traditional foods."
    },
  ];
  return(
    <div className='testimonials'>
      <div className="testimonials-top">
        <h3 className="testimonials-title">Customer Testimonials!</h3>
      </div>
      <div className="testimonials-wrapper">
        {testimonials.map((testimonial) => {
          return _renderTestimonal(testimonial);
        })}
      </div>
    </div>
  );

};

function _renderTestimonal({id, image, stars, name, review}) {
  return(
    <article className="testimonial-container" key={id}>
      <div className="testimonial-img">
        <img src={image} alt="Profile" />
      </div>
      <div className="testimonial-text">
        <div className="testimonial-title">
          <h3>{name}</h3>
          <span>
            { 
              [...Array(stars)].fill().map((e, i) => { return _renderStar(i) })
            }
          </span>
        </div>
        <p>{review}</p>
      </div>
    </article>
  );
}

function _renderStar(i) {
  return (<span className="stars" key={i}></span>);
}
export default Testimonials;
