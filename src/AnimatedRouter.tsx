import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header';
import InternshipPage from './Pages/InternshipPage';
import MainPage from './Pages/MainPage';

const AnimatedRouter = () => {
const location = useLocation();
  return (
    <AnimatePresence initial={true} exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route path='portfoliov3/' element={<MainPage/>}/>
      <Route path='portfoliov3/:id' element={<InternshipPage/>}/>
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRouter