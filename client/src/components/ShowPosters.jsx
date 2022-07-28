const ShowPosters = (props) => { 
  console.log(props)
  return (
    <div className="shows_container">
    {
      props.shows.map((show) => (
        <div key={show.id} className="show_item">
          <h3>{show.title}</h3>
          <img className="home_poster" src={show.poster}/>
          <h5 className="home_dates">{show.dates}</h5>
        </div>
      ))
    }
   </div>
  )
  
}

export default ShowPosters



