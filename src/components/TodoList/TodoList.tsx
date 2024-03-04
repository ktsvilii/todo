import { useDispatch, useSelector } from "react-redux"
import { AppState, FILTERS, Todo, toggleTodo } from "../../store"
import { useMemo } from "react"
import classNames from "classnames"

import './TodoList.css'

export const TodoList = (): JSX.Element => {
  const dispatch = useDispatch()
  const todos = useSelector((state: AppState) => state.todos)
  const filter = useSelector((state: AppState) => state.filter)

  const filteredTodos = useMemo(() => {
    return todos.filter((todo: Todo) => {
      if (filter === FILTERS.ALL) return true
      if (filter === FILTERS.COMPLETED) return todo.completed
      if (filter === FILTERS.ACTIVE) return !todo.completed
      return true
    })
  }, [filter, todos])

  const handleToggleTodo = (id: number): void => {
    dispatch(toggleTodo(id))
  }

  return (
    <ul className="list">
      {filteredTodos.map((todo: Todo) => 
        <li
          key={todo.id}
          onClick={(): void => handleToggleTodo(todo.id)}
          className={classNames('todo', {
            'done': todo.completed,
          })}
        >
          {todo.text}
        </li>
      )}
    </ul>
  )
}
