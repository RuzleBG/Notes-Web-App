import Task from "./Task"
const Tasks = ({tasks, deleteFunc}) => {
  return (
    tasks.map(task=><Task task={task} iconClick={deleteFunc} key={task.id}/>)
  )
}

export default Tasks