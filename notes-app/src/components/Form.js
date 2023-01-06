import { useState } from "react"
import "../styles/Form.css"

function Form({func}) {

  const [name,updateName]=  useState('');
  const [description,updateDescription]=  useState('');
  const getTask=(e)=>{
    e.preventDefault();
    if(name==='' || description===''){
      alert("invalid input");
    }
    else{
      func({name: name , description:description});
    }
    updateName('');
    updateDescription('');
  }
  return (
    <form onSubmit={getTask}>
        <label>Task: </label>
        <input type="text" value={name} onChange={(e)=>updateName(e.currentTarget.value)}/>
        <label>Description: </label>
        <input type="text" value={description} onChange={(e)=>updateDescription(e.currentTarget.value)}/>
        <input type="submit" style={{width: "10%"}}/>
    </form>
  )
}

export default Form