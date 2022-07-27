import { useEffect, useState } from 'react'
import axios from 'axios'
import ShowPosters from '../components/ShowPosters'

const Home = () => {
  return (
    <div>
      <h3 className="subheading">Shows for the 2022 season</h3>
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
    </div>
  )
}

export default Home
