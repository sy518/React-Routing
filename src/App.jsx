import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import React from 'react'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
