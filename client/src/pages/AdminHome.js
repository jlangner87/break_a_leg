import NewVolunteerForm from '../components/NewVolunteer'
import NewShowForm from '../components/NewShow'
import UpdateShow from '../components/UpdateShow'
import UpdateVolunteer from '../components/UpdateVolunteer'

const AdminHome = () => {
  return (
    <div>
      <div>
        <h3 className="subheading">Add a volunteers</h3>
        <NewVolunteerForm />
        <h3 className="subheading">Add a shows</h3>
        <NewShowForm />
        <h3 className="subheading">Update a volunteer</h3>
        <UpdateVolunteer />
        <h3 className="subheading">Update a show</h3>
        <UpdateShow />
      </div>
    </div>
  )
}

export default AdminHome
