import ShowPosters from '../components/ShowPosters'

const Home = () => {
  return (
    <div>
      <h3 className="subheading">Upcoming shows for our 65th season</h3>
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
