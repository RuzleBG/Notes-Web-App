import {FaTimes} from "react-icons/fa"
import "../styles/Task.css"
const Task = ({task, iconClick}) => {
  return (
    <div className='task' style={{border: "2px solid black"}}>
        <h3>{task.name} <FaTimes style={{color:"red", cursor: 'pointer'}} onClick={()=>(iconClick(task.id))}/></h3>
        <h5>{task.description}</h5>
        <p>{task.time}</p>
    </div>
  )
}

export default Task