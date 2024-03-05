import { useDispatch, useSelector } from "react-redux"
import { AppState, FILTERS, Todo, toggleTodo } from "../../store"
import { useMemo } from "react"
import classNames from "classnames"

import "./TodoList.css"

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
    <div className="list">
      {filteredTodos.map((todo: Todo) => 
        <div
          key={todo.id}
          onClick={(): void => handleToggleTodo(todo.id)}
          className={classNames("todo", { done: todo.completed })}
        >
          <label className="custom-checkbox-container">
            <input
              type="checkbox"
              id={`checkbox-${todo.id}`}
              checked={todo.completed}
              onChange={(): void => handleToggleTodo(todo.id)}
            />
            <div className="custom-checkbox">
              <div className="checkmark"></div>
            </div>
            {todo.text}
          </label>
        </div>
      )}
    </div>
  )
}
