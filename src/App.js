/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import { Toaster } from 'react-hot-toast';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/auth/Signup';
import Login from './components/auth/Login';

const App = () => {
  const location = useLocation();

  // Define routes where Navbar & Footer should NOT appear
  const authRoutes = ["/auth/signup", "/auth/login"]; // Add more if needed

  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      {/* Conditionally render Navbar */}
      {!authRoutes.includes(location.pathname) && <Navbar />}
      <Toaster/>
      <Routes>
        <Route path='/' element={<Navigate to="/auth/signup"/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path='/auth/login' element={<Login/>}/>
      </Routes>

      {/* Conditionally render Footer */}
      {!authRoutes.includes(location.pathname) && <Footer />}
    </Box>
  );
};

export default App;
