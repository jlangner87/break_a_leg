import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Admin from './components/Admin'
import AdminHome from './pages/AdminHome'
import Shows from './pages/Shows'
import Volunteers from './pages/Volunteers'

const App = () => {
  const [shows, setShows] = useState({})
  // console.log(shows)

  useEffect(() => {
    async function getDetails() {
      const res = await axios.get(`${BASE_URL}shows`)
      setShows(res.data)
      console.log(res.data)
    }
    getDetails()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <h2 className="theater_name">Sometown Community Theater</h2>
      <Routes>
        <Route path="/" element={<Home shows={shows} />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/shows" element={<Shows shows={shows} />} />
        <Route path="/volunteers" element={<Volunteers />} />
      </Routes>

      <Admin />
    </div>
  )
}

export default App
