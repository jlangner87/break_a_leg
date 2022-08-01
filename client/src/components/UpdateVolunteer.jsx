import React, { useState } from 'react';
import axios from 'axios'
import { BASE_URL } from '../globals';

const UpdateVolunteer = (props) => {


  const [formState, setFormState] = useState('')

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (_id, event) => {
    event.preventDefault()
    let res = await axios.put(`${BASE_URL}volunteers/${_id}`, formState)
    let updated = res.data
    formState(updated)
    setFormState('')
  }
  return (
    <form onSubmit={handleSubmit} className='form_align'>
      <input id='_id' onChange={handleChange} value={formState._id} className="form_block" type="text" placeholder="volunteer ID here"/>
      <input id='name' onChange={handleChange} value={formState.name} className="form_block" type="text" placeholder="name here"/>
      <input id='role' onChange={handleChange} value={formState.role} className="form_block" type="text" placeholder="role here"/> 
      <input id='city' onChange={handleChange} value={formState.city} className="form_block" type="text" placeholder="city here"/>
      <input id='quote' onChange={handleChange} value={formState.quote} className="form_block" type="text" placeholder="quote here"/>
      <input id='headshot' onChange={handleChange} value={formState.headshot} className="form_block" type="text" placeholder="headshot URL here"/>
      <br></br>
      <button className="submit" type="submit">Submit</button>
      </form>
  )
}

  export default UpdateVolunteer