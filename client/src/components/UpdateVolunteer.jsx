import { useNavigate } from "react-router-dom"

const UpdateVolunteer = (props) => {
  return (
    <div>
      <input type="text" name= "name" placeholder="enter updated name here"/>
      <br></br>
      <button className="submit">Submit</button>
    </div>
  )
}

  export default UpdateVolunteer