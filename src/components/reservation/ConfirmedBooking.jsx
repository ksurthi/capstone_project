const ConfirmedBooking = (props) => {
  const { name, email, cellPhone, occasion, guests, date, time } = props;
  return (
    <div className="reserve">
        <h3>Reservation confirmed!</h3>
        <br/>
        <p>We have received your reservation with the following information:</p>
        <div className="details">
          <ul>
            <li>Full Name:</li>
            <li>Phone Number:</li>
            <li>Reservation date:</li>
            <li>Reservation time:</li>
            <li>Number of People:</li>
            <li>Occasion:</li>
          </ul>
          <ul>
            <li>{name}</li>
            <li>{cellPhone}</li>
            <li>{date}</li>
            <li>{time}</li>
            <li>{guests}</li>
            <li>{occasion ? occasion : 'General'}</li>
          </ul>
        </div>
        <p>Order details has been sent to: <b><i>{email}</i></b></p>
        <br/>
      </div>
  );
};

export default ConfirmedBooking;