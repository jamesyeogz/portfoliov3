import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AnimatedRouter from './AnimatedRouter';
import './App.css';
import InternshipPage from './Pages/InternshipPage';
import MainPage from './Pages/MainPage';

function App() {

  return(
  <BrowserRouter>
<AnimatedRouter/>
  </BrowserRouter>
  
  );
}

export default App;
