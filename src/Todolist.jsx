import React from 'react'
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import "./todolist.css";

const Todolist = () => {
  return (
    <div className='main_div'>
        <div className="center_div">
            <h1>ToDo List</h1>
            <input type="text" placeholder='Add your task' />
            <button className='newBtn'/>
            <ol>
                
                <li>Buy Vegetables</li>

            </ol>
        </div>
    </div>
  )
}

export default Todolist
