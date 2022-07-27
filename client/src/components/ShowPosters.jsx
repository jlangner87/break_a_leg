import { PromiseProvider } from 'mongoose'
import { useNavigate } from 'react-router-dom'

const ShowPosters = (props) => {
  // let navigate = useNavigate()
  // const returnShow = (show) => {
  //   navigate(`${show.id}`)
  // }

  return (
    <div>
        <p className='subheading'>Show Title Here</p>
    <p>poster here</p>
    <p>dates here</p>
    </div>
    )
}




export default ShowPosters





{/* </div>

    <div className='show_list'>
      {
        props.shows.map((show) =>(
        <div className='show_poster' onClick={() => returnShow(show)} key ={show.id}>
        <h3>{show.title}</h3>
        </div>
        ))}
     
    </div> */}