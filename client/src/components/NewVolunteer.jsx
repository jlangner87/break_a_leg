import { useNavigate } from "react-router-dom"

const NewVolunteerForm = (props) => {
  return (
    <div>
      <input type="text" name= "title" placeholder="enter full name here"/>
      <br></br>
      <button className="submit">Submit</button>
    </div>
  )
}

  export default NewVolunteerForm