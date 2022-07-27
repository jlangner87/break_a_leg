import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2 className="theater_name">Sometown Community Theater</h2>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="footer">Admin login route will go here</div>
    </div>
  )
}

export default App
