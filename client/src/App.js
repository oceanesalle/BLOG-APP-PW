import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {


  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/auth" element={<Auth />}/>
      </Routes>
      <Home />
    </Container>
    </BrowserRouter>
  );
};
export default App