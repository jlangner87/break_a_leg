import NewVolunteerForm from '../components/NewVolunteer'
import NewShowForm from '../components/NewShow'
import UpdateShow from '../components/UpdateShow'
import UpdateVolunteer from '../components/UpdateVolunteer'
import DeleteVolunteer from '../components/DeleteVolunteer'

const AdminHome = () => {
  return (
    <div>
      <h2 className="admin_title">Admin Submission Forms</h2>
      <div className="form_container">
        <div className="admin_form">
          <h3 className="subheading">Add a volunteer</h3>
          <NewVolunteerForm />
        </div>
        <div className="admin_form">
          <h3 className="subheading">Add a show</h3>
          <NewShowForm />
        </div>
        <div className="admin_form">
          <h3 className="subheading">Update a volunteer</h3>
          <UpdateVolunteer />
        </div>
        <div className="admin_form">
          <h3 className="subheading">Update a show</h3>
          <UpdateShow />
        </div>
        <div className="admin_form">
          <h3 className="subheading">Delete a volunteer</h3>
          <DeleteVolunteer />
        </div>
      </div>
    </div>
  )
}

export default AdminHome
