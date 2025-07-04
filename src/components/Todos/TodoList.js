import Todo from "./Todo"
import styles from "./TodoList.module.css"
function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            deleteTodo={deleteTodo}
            todo={todo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <h1 className={styles.noTodo}>No Todo</h1>
      )}
    </div>
  )
}
export default TodoList
