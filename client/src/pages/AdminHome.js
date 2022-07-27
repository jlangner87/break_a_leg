import NewVolunteerForm from '../components/NewVolunteer'
import NewShowForm from '../components/NewShow'

const AdminHome = () => {
  return (
    <div>
      <div>
        <h3 className="subheading">Add Volunteers</h3>
        <NewVolunteerForm />
        <h3 className="subheading">Add Shows</h3>
        <NewShowForm />
      </div>
    </div>
  )
}

export default AdminHome
