import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Reservation from './components/reservation/Reservation';

import './App.css';

const reducer = (state, action) => {
  if(action.type === 'reserve_table') {
    console.log('values:' + action.values);
    return action.values;
  }
  return state;
};

const updateTimes = (state, action) => {
  if(action.type === 'update_times') {
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ];
  }
};

const initializeTimes = () => {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
}
const App = () => {
  const availableTimes = initializeTimes();
  const [availableTimesState, dispatchAvailableTimes ] = useReducer(updateTimes, availableTimes);
  const [formState, dispatch] = useReducer(reducer, {
    name: '',
    email :'',
    cellPhone: '',
    occasion: '',
    guests: '',
    date: '',
    time: '' 
  });
  const reserveHandler = (values) => {
    dispatch({ type: 'reserve_table', values });
  };
  const updateTimesHandler = (date) => {
    dispatchAvailableTimes({ type: 'update_times', date});
  }
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/reservation" element={<Reservation formValues={formState} availableTimes={availableTimes} updateTimes={updateTimesHandler} reserve={reserveHandler} />} />
      </Routes>
      <Footer/>
    </>
  );
}

export { App as default, initializeTimes, updateTimes};
