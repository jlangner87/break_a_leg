import React, { useState } from 'react';
import axios from 'axios'
import { BASE_URL } from '../globals';

const UpdateShow = (props) => {

  const initialState = {
    _id: '',
    title: '',
    dates: '',
    synopsis: '',
    poster: '',
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.put(`${BASE_URL}shows/id`, formState)
    console.log(res)
    setFormState(initialState)
  }
  return (
    <form onSubmit={handleSubmit} className='form_align'>
      <input id='_id' onChange={handleChange} value={formState._id} className="form_block" type="text" placeholder="show ID here"/>
      <input id='title' onChange={handleChange} value={formState.title} className="form_block" type="text" placeholder="title here"/>
      <input id='dates' onChange={handleChange} value={formState.dates} className="form_block" type="text" placeholder="dates here"/> 
      <input id='synopsis' onChange={handleChange} value={formState.synopsis} className="form_block" type="text" placeholder="synopsis here"/>
      <input id='poster' onChange={handleChange} value={formState.poster} className="form_block" type="text" placeholder="poster URL here"/>
      <br></br>
      <button className="submit" type="submit">Submit</button>
      </form>
  )
}

  export default UpdateShow