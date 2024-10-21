import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useReducer } from "react";
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Reservation from './components/reservation/Reservation';
import ConfirmedBooking from "./components/reservation/ConfirmedBooking";
import {fetchAPI, submitAPI} from './components/reservation/api';
import './App.css';

const reducer = (state, action) => {
  if(action.type === 'reserve_table') {
    const values = action.values;
    const newState = {
      ...state, 
      ...values
    };
    return newState;
  }
  return state;
};

const updateTimes = (state, action) => {
  if(action.type === 'update_times') {
    const selectedDate = new Date(action.date);
    return fetchAPI(selectedDate);
  }
};

const initializeTimes = () => {
  return fetchAPI(new Date());
}

const submitForm = (values) => {
  return submitAPI(values);
}

const App = () => {
  const [availableTimes, dispatchAvailableTimes ] = useReducer(updateTimes, initializeTimes());
  const initialFormState = {
    name: '',
    email :'',
    cellPhone: '',
    occasion: '',
    guests: '',
    date: '',
    time: '' 
  };
  const [formState, dispatch] = useReducer(reducer, initialFormState);
  const navigate = useNavigate();
  useEffect(
    () => {
      if( formState.name !== '') {
        navigate('/reservationConfirmation');
      }
    }, [formState]
  );
  const reserveHandler = (values) => {
    if(submitForm(values)) {
      dispatch({ type: 'reserve_table', values });
    }
  };
  const updateTimesHandler = (date) => {
    dispatchAvailableTimes({ type: 'update_times', date});
  }
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/reservation" element={<Reservation formValues={initialFormState} availableTimes={availableTimes} updateTimes={updateTimesHandler} reserve={reserveHandler} />} />
        <Route path="/reservationConfirmation" element={<ConfirmedBooking {...formState} />} />
      </Routes>
      <Footer/>
    </>
  );
}

export { App as default, initializeTimes, updateTimes};
