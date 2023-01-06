import Header from "./components/header";
import "./styles/App.css"
import Form from "./components/Form";
import { useState } from "react";
import Tasks from "./components/Tasks";
function App() {
  let [tasks, updateTasks]=useState([])

  const submitFunc=(task)=>{
    const date=new Date();
    const newTask={
      id: (new Date()).getTime(),
      name: task.name,
      description: task.description,
      time: `${date.getDay()}-${date.getMonth()+1}-${date.getYear()}`}
    updateTasks([...tasks,newTask])
    console.log(task);
  }

  const deleteTask=(id)=>{
    console.log(id);
    updateTasks(tasks.filter(task=>task.id!==id));
  }
  return (
    <>
      <Header/>
      <Form func={submitFunc}/>
      <Tasks tasks={tasks} deleteFunc={deleteTask}/>
    </>
  )
}

export default App;