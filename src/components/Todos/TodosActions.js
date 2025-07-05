import { RiDeleteBackLine, RiRefreshLine } from "react-icons/ri"
import Button from "../Button/Button"
import style from "./TodosActions.module.css"
function TodosActions({ resetTodos, clearTodos, disable }) {
  return (
    <div className={style.todosActionsContainer}>
      <Button title="Reset" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear" onClick={clearTodos} disable={!disable}><RiDeleteBackLine /></Button>
      
    </div>
  )
}
export default TodosActions
