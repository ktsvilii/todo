import { useSelector } from "react-redux"
import { AppState, Todo } from "../../store"

import './Counters.css'

export const Counters = (): JSX.Element => {
  const todos = useSelector((state: AppState) => state.todos)

  const filterTodos = (completed: boolean): Todo[] =>
    todos.filter((todo) => todo.completed === completed)

  const completedTodos = filterTodos(true)
  const activeTodos = filterTodos(false)

  return (
    <div className="counters__wrapper">
      <span>Total ToDo's <strong>{todos.length}</strong></span>
      <span>Completed ToDo's <strong>{completedTodos.length}</strong></span>
      <span>Active ToDo's <strong>{activeTodos.length}</strong></span>
    </div>
  )
}
