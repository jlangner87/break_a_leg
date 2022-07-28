// import { BASE_URL } from '../globals'
// import axios from 'axios'
import { useState, useEffect } from 'react'
import ShowPosters from '../components/ShowPosters'

const Home = (props) => {
  return (
    <div>
      <h3 className="subheading">Upcoming shows for our 75th season</h3>
      <ShowPosters shows={props.shows} />
      <h3 className="subheading">Meet the volunteers who make it possible</h3>
    </div>
  )
}

export default Home
