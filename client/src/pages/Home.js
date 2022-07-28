import ShowPosters from '../components/ShowPosters'

const Home = () => {
  return (
    <div>
      <h3 className="subheading">Upcoming shows for our 75th season</h3>
      <ul className="shows_container">
        <li className="show_item">
          <ShowPosters />
        </li>
      </ul>
      <h3 className="subheading">Meet the volunteers who make it possible</h3>
    </div>
  )
}

export default Home
