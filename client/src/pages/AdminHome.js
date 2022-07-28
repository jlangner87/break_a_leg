import NewVolunteerForm from '../components/NewVolunteer'
import NewShowForm from '../components/NewShow'
import UpdateShow from '../components/UpdateShow'
import UpdateVolunteer from '../components/UpdateVolunteer'
import DeleteVolunteer from '../components/DeleteVolunteer'

const AdminHome = () => {
  return (
    <div>
      <div className="form_container">
        <form className="admin_form">
          <h3 className="subheading">Add a volunteers</h3>
          <NewVolunteerForm />
        </form>
        <form className="admin_form">
          <h3 className="subheading">Add a shows</h3>
          <NewShowForm />
        </form>
        <form className="admin_form">
          <h3 className="subheading">Update a volunteer</h3>
          <UpdateVolunteer />
        </form>
        <form className="admin_form">
          <h3 className="subheading">Update a show</h3>
          <UpdateShow />
        </form>
        <form className="admin_form">
          <h3 className="subheading">Delete a volunteer</h3>
          <DeleteVolunteer />
        </form>
      </div>
    </div>
  )
}

export default AdminHome
