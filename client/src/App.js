import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Admin from './components/Admin'
import AdminHome from './pages/AdminHome'
import Shows from './pages/Shows'
import Volunteers from './pages/Volunteers'
import ShowPosters from './components/ShowPosters'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <h2 className="theater_name">Sometown Community Theater</h2>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/volunteers" element={<Volunteers />} />
      </Routes>

      <Admin />
    </div>
  )
}

export default App
