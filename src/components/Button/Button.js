import style from "./Button.module.css"

function Button({ onClick, children, title, disable = false }) {
  return (
    <button
      className={style.button}
      onClick={onClick}
      disabled={disable}
      title={title}
    >
      {children}
    </button>
  )
}
export default Button
