import { BrowserRouter } from 'react-router-dom';
import {act} from 'react';
import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import {updateTimes, initializeTimes } from './App';
import Reservation from './components/reservation/Reservation';

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

test('Renders the reservations heading', () => {
  render(<BrowserRouter><Reservation formValues={initialValues} availableTimes={availableTimes} /></BrowserRouter>);
  const headingElement = screen.getByText(/Reserve a table!/i);
  expect(headingElement).toBeInTheDocument();
});

test('Renders the reservations heading', () => {
  render(<BrowserRouter><Reservation formValues={initialValues} availableTimes={availableTimes} /></BrowserRouter>);
  const headingElement = screen.getByText(/Reserve a table!/i);
  expect(headingElement).toBeInTheDocument();
});

test('Should return the correct initial times', () => {
  const availableTimes = initializeTimes();
  expect(availableTimes).not.toBeNull();
  expect(availableTimes.length).toBeGreaterThan(0);
});

test('Should return what is in the state', () => {
  const date = new Date();
  const action = { type: 'update_times', date: date.toISOString() };
  const state = initializeTimes();
  const availableTimes = updateTimes(state, action);
  expect(JSON.stringify(availableTimes)).toBe(JSON.stringify(state));
});

test('should test input validity.', async () => {
  let container = null;
  await act( async () => {
    render(<BrowserRouter><Reservation formValues={initialValues} availableTimes={availableTimes} /></BrowserRouter>);
  });
  
  await act(async () => {
    fireEvent.click(screen.getByText('Reserve'));
  });
  const error = await screen.findByText(/Full name is required!/);
  expect(error).toBeInTheDocument();

  const emailInput = screen.getByLabelText(/Email/);
  await act(async () => {
    fireEvent.change(emailInput, { target: { value: 'exampleexample.com' }});
  });
  
  const emailError = await screen.findByText(/Email is not valid/i);
  expect(emailError).toBeInTheDocument();
  
  const phoneInput = screen.getByLabelText(/Cell Phone/);
  await act(async () => {
    fireEvent.change(phoneInput, { target: { value: 'abc' }});
  });
  const phoneError =   await screen.findByText(/Invalid phone number/i);
  expect(phoneError).toBeInTheDocument();  
  await act(async () => {
    fireEvent.change(phoneInput, { target: { value: '0123456789' }});
  });
  waitForElementToBeRemoved(phoneError).then(() =>
    console.log('Phone is valid now'),
  );
});

test('should submit form.', async () => {
  const reserveHandler = jest.fn();
  render(<BrowserRouter><Reservation formValues={initialValues} availableTimes={availableTimes}  reserve={reserveHandler}/></BrowserRouter>);
  screen.getByRole("form", { name: "reservation-form" }).onsubmit = reserveHandler;
  await act(async () => {
    fireEvent.click(screen.getByText('Reserve'));
  });
  await waitFor(() => expect(reserveHandler).toHaveBeenCalledTimes(1))
});
