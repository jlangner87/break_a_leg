import React, { useState } from 'react';
import axios from 'axios'
import { BASE_URL } from '../globals'

const NewVolunteerForm = () => {

  const initialState = {
    name: '',
    role: '',
    city: '',
    quote: '',
    headshot: '',
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    let res = await axios.post(`${BASE_URL}volunteers`, formState)
    setFormState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id='name' onChange={handleChange} value={formState.title} className="form_block" type="text" placeholder="full name here"/>
      <input id='role' onChange={handleChange} value={formState.role} className="form_block" type="text" placeholder="role here"/>
      <input id='city' onChange={handleChange} value={formState.city} className="form_block" type="text" placeholder="city here"/>
      <input id='quote' onChange={handleChange} value={formState.quote} className="form_block" type="text" placeholder="quote here"/>
      <input id='headshot' onChange={handleChange} value={formState.headshot} className="form_block" type="text" placeholder="headshot URL here"/>
      <br></br>
      <button className="submit">Submit</button>
      </form>
  )
}

  export default NewVolunteerForm