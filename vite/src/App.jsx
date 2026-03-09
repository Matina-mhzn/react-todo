import React from 'react'
import './App.css'
import { useState } from 'react';



const App = () => {

  const [tasks, setTasks] = useState([]);
  const [newtask, setNewtask] = useState("");

  function handleInputChange(event) {
    setNewtask(event.target.value);
  }
  function addtask() {
    if (newtask.trim() !== "") {
      setTasks(t => [...t, newtask]);
      setNewtask("");
    }
  }
  function dltask(index) {
    const updatedtask = tasks.filter((_, i) => i !== index);
    setTasks(updatedtask);
  }






  return (
    <div>
      <div className="box">
        <div className="container">
          <h1>To-Do List</h1>
          <div className="input-box">
            <input type="text" placeholder='Add a to-do' name="" id="" value={newtask} onChange={handleInputChange} />
            <button onClick={addtask}>Add</button>
          </div>
      <br/>
          <div className="tasks">
            <ol>
              {tasks.map((task, index) =>
                <li key={index}>
                  <div className="task">
                  <span className='text'>{task}</span>
                  <button className='dltbtn' onClick={() => dltask(index)}>Delete</button>
                  </div>
                </li>
              )}
            </ol>
          </div>
        </div>
      </div>



    </div>
  )
}

export default App
