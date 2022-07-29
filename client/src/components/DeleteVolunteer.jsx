import React, { useState } from 'react';
import { useParams } from 'react';
import axios from 'axios'
import { BASE_URL } from '../globals';

const DeleteVolunteer = (props) => {

  const initialState = {
    _id: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.delete(`${BASE_URL}volunteers/id`, formState)
    console.log(res)
    setFormState(initialState)
  }
  return (
    <form onSubmit={handleSubmit} className='form_align'>
      <input id='name' onChange={handleChange} value={formState._id} className="form_block" type="text" placeholder="volunteer ID here"/>
      <br></br>
      <button className="submit" type="submit">Submit</button>
      </form>
  )
}

  export default DeleteVolunteer