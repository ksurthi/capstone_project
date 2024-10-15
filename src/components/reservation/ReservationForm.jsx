import React, {useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const ReservationForm = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email :'',
      cellPhone: '',
      occasion: '',
      guests: '',
      date: ''
    },
    onSubmit: (values, { setSubmitting }) => {
      //submit("", values);
      setSubmitting(false);
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full name is required!'),
      email: Yup.string().email('Email is not valid').required('Email is required!'),
      cellPhone: Yup.string().required("Telephone is required!"),
      guests: Yup.number().min(1, "There must be at least 1 guest!").required("Please specify number of guests per table!"),
      date: Yup.string().required("Please select date and time!")
    }),
  });

  return (
    <form className="reservation-form-wrapper" onSubmit={formik.handleSubmit}>
      <fieldset>
        <div className="field">
          <label htmlFor="name">Full Name*</label>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <span className="error-message">{formik.touched.name && formik.errors.name}</span>
        </div>

        <div className="field">
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            placeholder="jonhdoe@email.com"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <span className="error-message">{formik.touched.email && formik.errors.email}</span>
        </div>

        <div className="field">
          <label htmlFor="cellPhone">Cell Phone*</label>
          <input
            type="tel"
            placeholder="123 123 1234"
            name="cellPhone"
            value={formik.values.cellPhone}
            onChange={formik.handleChange}
          />
          <span className="error-message">{formik.touched.cellPhone && formik.errors.cellPhone}</span>
        </div>

        <div className="field occasion">
          <label htmlFor="occasion">Occasion (optional)</label>
          <div className="options">
            <select name="occasion" value={formik.values.occasion} onChange={formik.handleChange}>
              <option value="select">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>

        <div className="field guest">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            placeholder="2"
            min={1}
            max={30}
            name="guests"
            value={formik.values.guests}
            onChange={formik.handleChange}
          />
          <span className="error-message">{formik.touched.guests && formik.errors.guests}</span>
        </div>

        <div className="field">
          <label htmlFor="date">Date & Time</label>
          <input type="datetime-local" name="date" value={formik.values.date} onChange={formik.handleChange}/>
          <span className="error-message">{formik.touched.date && formik.errors.date}</span>
        </div>
        <button className="btn" type="submit">
          Reserve
        </button>
      </fieldset>
    </form>
  );
}

export default ReservationForm;
