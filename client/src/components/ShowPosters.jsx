import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const ShowPosters = () => { 

  useEffect(() => {
    axios.get(` http://localhost:3001/shows`)
    .then(response => ShowPosters(response.data.total))
  }, [])





  return (

  <div className="shows_container">
    <h3>Route from ShowPosters to Home is working</h3>

  </div>
 
)}




export default ShowPosters



