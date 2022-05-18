import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Appointment from './Pages/Apointments/Appointment';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import NotFound from './Pages/NotFound';
import Review from './Pages/Review';
import Login from './Pages/Security/Login';
import RequireAuth from './Pages/Security/RequireAuth';
import SignUp from './Shared/SingUp';
import ResetPass from './Pages/Security/ResetPass';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Security/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';

const App = () => {
  return (
    <div className='px-12'>
      <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/Header' element={<Header></Header>}></Route> */}
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>

        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          {/* <Route path='MyReview' element={<MyReview></MyReview>}></Route> */}
          <Route path='MyHistory' element={<MyHistory></MyHistory>}></Route>
          <Route path='Users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>

        </Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/resetPass' element={<ResetPass></ResetPass>}></Route>
        
        <Route path='/Footer' element={<Footer></Footer>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );

};

export default App;