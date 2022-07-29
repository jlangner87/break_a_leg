import React, { useState } from 'react';
import { useParams } from 'react';
import axios from 'axios'
import { BASE_URL } from '../globals';

const DeleteVolunteer = (props) => {

  const initialState = {
    name: ''
  }
  const [formState, setFormState] = useState(initialState)
  const {id} = useParams()

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.delete(`${BASE_URL}volunteers/:${id}`, formState)
    console.log(res)
    setFormState(initialState)
  }
  return (
    <form onSubmit={handleSubmit} className='form_align'>
      <input id='name' onChange={handleChange} value={formState.name} className="form_block" type="text" placeholder="name here"/>
      <br></br>
      <button className="submit" type="submit">Submit</button>
      </form>
  )
}

  export default DeleteVolunteer