import { useEffect, useState } from 'react'
import axios from 'axios'
import ShowPosters from '../components/ShowPosters'

const Home = () => {
  return (
    <ul className="shows_container">
      <li className="show_item">
        <ShowPosters />
      </li>
      <li className="show_item">
        <ShowPosters />
      </li>
      <li className="show_item">
        <ShowPosters />
      </li>
      <li className="show_item">
        <ShowPosters />
      </li>
      <li className="show_item">
        <ShowPosters />
      </li>
      <li className="show_item">
        <ShowPosters />
      </li>
    </ul>
  )
}

export default Home
