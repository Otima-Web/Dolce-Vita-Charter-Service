import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './LandingPage/LandingPage';
import Navbar from './NavBar'
import Footer from './Footer'

function App() {

  
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
