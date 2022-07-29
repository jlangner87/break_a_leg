const NewVolunteerForm = (props) => {
  return (
    <form>
      <input className="form_block" type="text" name= "name" placeholder="full name here"/>
      <input className="form_block" type="text" name= "role" placeholder="role here"/>
      <input className="form_block" type="text" name= "city" placeholder="city here"/>
      <input className="form_block" type="text" name= "quote" placeholder="quote here"/>
      <input className="form_block" type="text" name= "headshot" placeholder="headshot URL here"/>
      <br></br>
      <button className="submit">Submit</button>
      </form>
  )
}

  export default NewVolunteerForm