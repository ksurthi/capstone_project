import React  from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const ReservationForm = (props) => {
  const { formValues, availableTimes, updateTimes, reserve } = props;

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        reserve(values);
        setSubmitting(false);
      }, 400);
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full name is required!'),
      email: Yup.string().email('Email is not valid').required('Email is required!'),
      cellPhone: Yup.string().required("Telephone is required!").test('phone', `Invalid phone number`, (v) => {
        if (!v) {
          return true;
        }
        return /^\+?\d{6,15}$/.test(v);
      }),
      guests: Yup.number().min(1, "There must be at least 1 guest!").required("Please specify number of guests per table!"),
      date: Yup.string().required("Please select date!"),
      time: Yup.string().required("Please select time!")
    }),
  });

  return (
    <form className="reservation-form-wrapper" aria-label="reservation-form" onSubmit={formik.handleSubmit}>
      <fieldset>
        <div className="field">
          <label htmlFor="name" aria-label="name">Full Name*</label>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            id="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.name && <span className="error-message">{formik.errors.name}</span>}
        </div>

        <div className="field">
          <label htmlFor="email" aria-label="email">Email*</label>
          <input
            type="text"
            placeholder="jonhdoe@email.com"
            name="email"
            id="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && <span className="error-message">{formik.errors.email}</span>}
        </div>

        <div className="field">
          <label htmlFor="cellPhone" aria-label="cellPhone">Cell Phone*</label>
          <input
            type="tel"
            placeholder="123 123 1234"
            name="cellPhone"
            id="cellPhone"
            value={formik.values.cellPhone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.cellPhone && <span className="error-message">{formik.errors.cellPhone}</span>}
        </div>

        <div className="field occasion">
          <label htmlFor="occasion" aria-label="occasion">Occasion (optional)</label>
          <div className="options">
            <select name="occasion" id="occcasion" value={formik.values.occasion} onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <option value="select">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>

        <div className="field guest">
          <label htmlFor="guests" aria-label="guests">Guests</label>
          <input
            type="number"
            placeholder="2"
            min={1}
            max={30}
            name="guests"
            id="guests"
            value={formik.values.guests}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.guests && <span className="error-message">{formik.errors.guests}</span>}
        </div>

        <div className="field">
          <label htmlFor="date" aria-label="date">Date</label>
          <input type="date" name="date" id="date" value={formik.values.date} onChange={e => { formik.handleChange(e); updateTimes(e.currentTarget.value); }} onBlur={formik.handleBlur}/>
          <span className="error-message">{formik.touched.date && formik.errors.date}</span>
        </div>

        <div className="field">
          <label htmlFor="time" aria-label="time">Time</label>
          <div className="options">
            <select name="time" id="time" value={formik.values.time} onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <option value="select">Select Time</option>
              {
                availableTimes.map((time) => {
                    return _renderOption(time)
                })
              }
            </select>
          </div>
          {formik.touched.time && <span className="error-message">{formik.errors.time}</span>}
        </div>
        <button className="btn" type="submit">
          Reserve
        </button>
      </fieldset>
    </form>
  );
}
function _renderOption(time) {
  return (<option value={time} key={time}>{time}</option>);
}

export default ReservationForm;
