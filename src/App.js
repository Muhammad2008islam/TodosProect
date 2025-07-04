import "./App.css"
import TodosActions from "./components/Todos/TodosActions"
import { v4 as uuidv4 } from "uuid"
import TodoForm from "./components/Todos/TodoForm"
import { useState } from "react"
import TodoList from "./components/Todos/TodoList"
function App() {
  const [todos, setTodos] = useState([])
  //addTodo
  const addTodo = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos((todos) => [...todos, newTodo])
  }

  //deleteTodo
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id))
  //toggleTodo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }
  //ResetTodos
  const ResetTodos = () => {
    setTodos([])
  }
  //ClearTodos
  const ClearTodos = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false))
  }
  ///CompletedTodosCount
  const CompletedTodosCount = todos.filter((todo) => todo.isCompleted).length
  return (
    <div className="App">
      <h2>Todo App</h2>
      <TodoForm addTodo={addTodo} />
      {todos.length > 0 ? (
        <TodosActions
          resetTodos={ResetTodos}
          clearTodos={ClearTodos}
          disable={!!CompletedTodosCount}
        />
      ) : (
        ""
      )}

      <TodoList deleteTodo={deleteTodo} todos={todos} toggleTodo={toggleTodo} />
      {CompletedTodosCount > 0 ? (
        <h1>You have completed {CompletedTodosCount}</h1>
      ) : (
        ""
      )}
    </div>
  )
}
export default App
