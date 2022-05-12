import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Appointment from './Pages/Apointments/Appointment';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import NotFound from './Pages/NotFound';
import Review from './Pages/Review';
import Login from './Pages/Security/Login';

const App = () => {
  return (
    <div className='px-12'>
      <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/Header' element={<Header></Header>}></Route> */}
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Footer' element={<Footer></Footer>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );

};

export default App;