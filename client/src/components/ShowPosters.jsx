import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const ShowPosters = () => { 

  useEffect(() => {
    async function getDetails() {
      const res = await axios.get(`${BASE_URL}shows`)
      console.log(res)
    }
    getDetails()
  }, [])
  return (

  <div className="shows_container">
    <h3>Route from ShowPosters to Home is working</h3>

  </div>
 
)}




export default ShowPosters



