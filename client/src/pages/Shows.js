const Shows = (props) => {
  let showArr = [props.shows]
  return (
    <div>
      <p className="subheading">All past and current shows</p>
      {showArr.map((show) => (
        <div className="shows_page_container" key={show.id}>
          <div className="shows_large">
            <h3 className="subheading">{show.title}</h3>
            <img className="shows_poster" src={show.poster} />
            <h5 className="shows_dates">{show.dates}</h5>
            <h5 className="synopsis">{show.synopsis}</h5>
            <h5 className="hidden_id">{show._id}</h5>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shows
