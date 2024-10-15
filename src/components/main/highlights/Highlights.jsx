import salad from "../../../images/greek salad.jpg";
import bruschetta1 from "../../../images/bruchetta.svg";
import creme from "../../../images/lemon dessert.jpg";
import './Highlights.css';

const Highlights = () => {
  const cardMenu = [
    {
      id: 100,
      image: salad,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
      order: "Order for delivery",
    },
    {
      id: 101,
      image: bruschetta1,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
      order: "Order for delivery",
    },
    {
      id: 102,
      image: creme,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
      order: "Order for delivery",
    },
  ];

  return (
    <div id="highlights" className="highlights-container">
      <div className="highlights-wrapper">
        <div className="highlights-top">
          <h3 className="highlights-top-title">This week specials!</h3>
          <button className="btn">Online Menu</button>
        </div>

        <article className="highlights-bottom">
          {cardMenu.map((item) => {
            return _renderCard(item);
          })}
        </article>
      </div>
    </div>
  );
};

function _renderCard({ image, title, price, description, order, id }) {
  return (
    <article className="card-container" key={id}>
      <div className="card-img">
        <img src={image} alt="Special dessert" />
      </div>

      <div className="card-text">
        <div className="card-title">
          <h3>{title}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p>{description}</p>
        <button className="btn">{order}</button>
      </div>
    </article>
  );
}

export default Highlights;