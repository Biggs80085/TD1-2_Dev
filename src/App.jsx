import styled from "styled-components";
import Cadre from './cadre'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SeriesComponent from './Component/SeriesComponent';
import CountComponent from './Component/CountComponent';
import Home from './Home';
import SecondsComponent from './Component/SecondsComponent';

const UL = styled.ul`
  display:flex;
`
const LI = styled.li`
  list-style-type: none;
  margin-left: 15px;
  border:1px solid gray;
  padding: 5px 10px;
  border-radius:30px;
  &:hover{
    background:gray;
  }
`
function App() {
  
  return (
    <Router>
    <div>
      <nav>
        <UL>
          <LI><Link to="/">Accueil</Link></LI>
          <LI><Link to="/series">Series</Link></LI>
          <LI><Link to="/count">Count</Link></LI>
          <LI><Link to="/seconds">Seconds</Link></LI>
        </UL>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<SeriesComponent />} />
        <Route path="/count" element={<CountComponent />} />
        <Route path="/seconds" element={<SecondsComponent />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
