import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EMICalculatorForm from './components/EMICalculatorForm';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import  {Container}  from '@mui/material';

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<EMICalculatorForm />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
    
    
  );
};

export default App;
