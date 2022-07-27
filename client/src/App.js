import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Admin from './components/Admin'
import AdminHome from './pages/AdminHome'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2 className="theater_name">Sometown Community Theater</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
      <Admin />
    </div>
  )
}

export default App
