const Shows = (props) => {
  return (
    <div>
      {props.shows.map((show) => (
        <div className="shows_page_container" key={show.id}>
          <div className="shows_large">
            <h3 className="subheading">{show.title}</h3>
            <img className="shows_poster" src={show.poster} />
            <h5 className="shows_dates">{show.dates}</h5>
            <h5 className="synopsis">{show.synopsis}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shows
