import React,{useState} from 'react'
import ToDoForms from './ToDoForms'

function ToDoList() {
const [todos,setTodos]=useState([])

const addTodo= todo=> {
    if(!todo.text|| /^\s*$/.test(todo.text)){
        return
    }

    const newTodos= [todo, ...todos]
    setTodos(newTodos)
    
}
  return (
    <div>
        <h1> what's the plan for today?</h1>
        <ToDoForms onsubmit={addTodo}/>
    </div>
  )
}

export default ToDoList