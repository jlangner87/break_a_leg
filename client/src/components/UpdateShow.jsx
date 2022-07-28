import React, { UseState } from "react"

const UpdateShow = (props) => {
  return (
    <form>
       <input className="form_block" type="text" name= "title" placeholder="title here"/>
      <input className="form_block" type="text" name= "dates" placeholder="dates here"/>
      <input className="form_block" type="text" name= "synopsis" placeholder="synopsis here"/>
      <input className="form_block" type="text" name= "poster" placeholder="poster URL here"/>
      <br></br>
      <button className="submit">Submit</button>
      </form>
  )
}

  export default UpdateShow