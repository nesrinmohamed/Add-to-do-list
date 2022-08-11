import React, { useState } from 'react'

 const TodoForm = ({addTodo}) => {
const [input , setInput] = useState('')

const handelSubmit = (e) =>{
e.preventDefault()
addTodo(input)
setInput('')
}

return (
<>
<form className='todo-form '
    onSubmit={handelSubmit}>
    <input type='text' 
    placeholder='Add' 
    value={input}
    onChange={(e => setInput(e.target.value) ) }
    />
<button className='btn' type='submit'>Add Items</button>
   </form>

</>
    )
}

export default TodoForm