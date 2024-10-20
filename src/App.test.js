import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App, {updateTimes, initializeTimes } from './App';
import Reservation from './components/reservation/Reservation';

test('Renders the reservations heading', () => {
  const initialValues = {
    name: '',
    email :'',
    cellPhone: '',
    occasion: '',
    guests: '',
    date: '',
    time: '' 
  };
  const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
  render(<BrowserRouter><Reservation formValues={initialValues} availableTimes={availableTimes} /></BrowserRouter>);
  const headingElement = screen.getByText(/Reserve a table!/i);
  expect(headingElement).toBeInTheDocument();
});

test('Renders the reservations heading', () => {
  const initialValues = {
    name: '',
    email :'',
    cellPhone: '',
    occasion: '',
    guests: '',
    date: '',
    time: '' 
  };
  const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
  render(<BrowserRouter><Reservation formValues={initialValues} availableTimes={availableTimes} /></BrowserRouter>);
  const headingElement = screen.getByText(/Reserve a table!/i);
  expect(headingElement).toBeInTheDocument();
});

test('Should return the correct initial times', () => {
  const availableTimes =  [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
  expect(JSON.stringify(availableTimes)).toBe(JSON.stringify(initializeTimes()));
});

test('Should return what is in the state', () => {
  const date = new Date();
  const action = { type: 'update_times', date: date.toISOString() };
  const state = initializeTimes();
  const availableTimes = updateTimes(state, action);
  expect(JSON.stringify(availableTimes)).toBe(JSON.stringify(state));
});
