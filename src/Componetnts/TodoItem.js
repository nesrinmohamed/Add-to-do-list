import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {BsCheck} from 'react-icons/bs'
const TodoItem = (props) => {
    const  {todo , removeTodo, completeHandler} = props
  return (
    <div className={todo.completed ? 'todo-item complete' : 'todo-item'}>
      <p>  {todo.text}</p>
        <div className='icons'>
            <BsCheck className='icon' onClick={() => completeHandler(todo.id)}/>
        <AiOutlineClose  className='icon' onClick={() => removeTodo(todo.id)}/>
        </div>
    </div>
  )
}

export default TodoItem