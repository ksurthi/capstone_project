import ReservationForm from "./ReservationForm";
import "./Reservation.css";
import restuarantImage from '../../images/restaurant.jpg';

const Reservation = () => {
  return (
      <div className="reservation">
        <div className="reservation-container">
          <div className="reservation-left">
            <h1>Reserve a table!</h1>
            <p>
              Make your reservation now to have an unforgettable experience at our restaurant.
            </p>
          </div>
          <div className="reservation-right">
            <div className="reservation-image">
              <img src={restuarantImage} alt="Serving delicious food" />
            </div>
          </div>
        </div>
        <div className="reservation-form">
          <p>
            Please fill in and submit form to book your reservation at Little
            Lemon.
          </p>
          <ReservationForm />
        </div>
      </div>
  );
}

export default Reservation;