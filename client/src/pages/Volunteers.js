const Volunteers = (props) => {
  return (
    <div>
      <p className="subheading">Meet the volunteers</p>
      {props.people.map((person) => (
        <div className="shows_page_container" key={person.id}>
          <div className="shows_large">
            <h3 className="vol_name">{person.name}</h3>
            <h5 className="role">{person.city}</h5>
            <img className="headshot" src={person.headshot} />
            <h5 className="role">{person.role}</h5>
            <h5 className="synopsis">" {person.quote} "</h5>
            <p className="hidden_id">" {person._id} "</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Volunteers
