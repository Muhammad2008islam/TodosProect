import styles from "./Todo.module.css"
import { RiTodoFill, RiDeleteBack2Fill } from "react-icons/ri"
import { FaCheck } from "react-icons/fa"
function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={todo.isCompleted ? styles.checkChange : styles.Todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBack2Fill
        onClick={() => deleteTodo(todo.id)}
        className={styles.deleteIcon}
      />
      <FaCheck
        onClick={() => toggleTodo(todo.id)}
        className={styles.checkIcon}
      />
    </div>
  )
}
export default Todo
