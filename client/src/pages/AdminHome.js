import NewVolunteerForm from '../components/NewVolunteer'
import NewShowForm from '../components/NewShow'
import UpdateShow from '../components/UpdateShow'
import UpdateVolunteer from '../components/UpdateVolunteer'
import DeleteVolunteer from '../components/DeleteVolunteer'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'

const AdminHome = () => {
  const [people, setPeople] = useState([{}])
  useEffect(() => {
    async function getDetails() {
      let res = await axios.get(`${BASE_URL}volunteers`)
      setPeople(res.data)
    }
    getDetails()
  }, [])

  const deletePerson = async (id, event) => {
    event.preventDefault()
    let res = axios.delete(`${BASE_URL}volunteers/${id}`)
  }

  return (
    <div>
      <h2 className="admin_title">Admin Submission Forms</h2>
      <div className="form_container">
        <div className="admin_form">
          <h3 className="subheading">Add a show</h3>
          <NewShowForm />
        </div>
        <div className="admin_form">
          <h3 className="subheading">Update a show</h3>
          <UpdateShow />
          <p className="admin_note">
            Show ID is hidden: Hover under synopsis to reveal
          </p>
        </div>
        <div className="admin_form">
          <h3 className="subheading">Add a volunteer</h3>
          <NewVolunteerForm />
        </div>
        <div className="admin_form">
          <h3 className="subheading">Update a volunteer</h3>
          <UpdateVolunteer />
        </div>
      </div>
      <div>
        <p className="subheading">Full volunteer roster</p>
        {people.map((person) => (
          <div className="roster_container" key={person.id}>
            <div className="volunteer_roster_item">
              <h3 className="synopsis">Full Name: {person.name}</h3>
              <br></br>
              <h5 className="synopsis">Current City: {person.city}</h5>
              <br></br>
              <h5 className="synopsis">
                Headshot_URL: <br></br> {person.headshot}
              </h5>
              <br></br>
              <h5 className="synopsis">Current Role: {person.role}</h5>
              <br></br>
              <h5 className="synopsis">
                Bio Quote: <br></br> {person.quote}
              </h5>
              <br></br>
              <h5 className="synopsis">Database ID: {person._id}</h5>
              <button
                onClick={(event) => deletePerson(person.id, event)}
                className="delete"
              >
                Delete Volunteer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminHome
