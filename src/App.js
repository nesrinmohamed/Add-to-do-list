import React , {useState , useEffect} from 'react'
import TodoForm from './Componetnts/TodoForm'
import TodoItem from './Componetnts/TodoItem'
import './App.css'

function App() {
    const [todos , setTodos] =useState(
      JSON.parse(localStorage.getItem('Todos')) ?? [],

      )

      useEffect(() => {
        localStorage.setItem('Todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) =>{
    let id = 1
    if(todos.length > 0){
    id = todos[0].id + 1
    }
    let todo = {id:id , text:text , complated:false}
    let newTodos =[todo , ...todos]
    console.log(newTodos)
    setTodos(newTodos)
    }
const removeTodo = (id) => {
let todoFilter = [...todos].filter((todo) => todo.id !== id)
setTodos(todoFilter)
}

const completeHandler = (id) =>{
    // console.log(id)
let checkItem = todos.map((todo) => {
if(todo.id === id){
todo.completed = !todo.completed
}
return todo
} )
setTodos(checkItem)
}
  return (
    <div className='todo-list'>
        <h2>Todo List</h2>
      <TodoForm  addTodo={addTodo}/>
      {todos.map((todo) =>(
        
        <TodoItem key={todo.id} todo={todo} completeHandler={completeHandler} removeTodo={removeTodo}/>
        ))}
    </div>
  )
}

export default App
