import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import Dev from './pages/Development';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/development" element={<Dev/>} />
      </Routes>
    </Router>
  );
}

export default App;
