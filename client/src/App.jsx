import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Doctors from './pages/Doctors'; // Ensure this component is created
import MyAppointments from './pages/MyAppointments'; // Ensure this component is created
import About from './pages/About';
import NotFound from './pages/notFound404';
import Contact from './pages/Contact'; // Ensure Contact is defined
import Login from './pages/Login';
import Profile from './pages/Profile';
import Appointment from './pages/Appointment'; // Ensure this component is created
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        
        <Route path='/doctors/:speciality' element={<Doctors />} />
       
        <Route path='/myappointments' element={<MyAppointments />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
