import { useNavigate } from "react-router-dom"

const NewShowForm = (props) => {
  return (
    <div>
      <input type="text" name= "title" placeholder="enter title here"/>
      <br></br>
      <button className="submit">Submit</button>
    </div>
  )
}

  export default NewShowForm