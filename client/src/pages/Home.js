import ShowPosters from '../components/ShowPosters'

const Home = (props) => {
  return (
    <div>
      <h3 className="subheading">Upcoming shows for our 75th season</h3>
      <ShowPosters shows={props.shows} />
    </div>
  )
}

export default Home
