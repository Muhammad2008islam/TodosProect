import style from "./TodoForm.module.css"
import { useState } from "react"
function TodoForm({ addTodo }) {
  const [text, setText] = useState("")
  const onSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed) {
      addTodo(trimmed)
      setText("")
    }
  }
  return (
    <div className={style.TodoForm}>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter for Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default TodoForm
