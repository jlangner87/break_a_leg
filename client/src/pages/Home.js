import ShowPosters from '../components/ShowPosters'

const Home = (props) => {
  return (
    <div>
      <h3 className="subheading">Now presenting our 75th Season</h3>
      <ShowPosters shows={props.shows} />
    </div>
  )
}

export default Home
