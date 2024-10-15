import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Reservation from './components/reservation/Reservation';

import './App.css';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
