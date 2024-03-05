import { BaseSyntheticEvent, useState } from "react"
import { AppState, addTodo } from "../../store"
import { useDispatch, useSelector } from "react-redux"

import classNames from "classnames"
import { Button } from "../Button"
import { Input } from "../Input"

import "./TodoInput.css"

export const TodoInput = (): JSX.Element => {
  const maxLength = useSelector((state: AppState) => state.todoLength)
  
  const [inputValue, setInputValue] = useState("")

  const isBtnDisabled = !inputValue || inputValue.length > maxLength

  const dispatch = useDispatch()

  const handleAddTodo = (): void => {
    dispatch(addTodo(inputValue))
    setInputValue("")
  }

  const handleChange = (e: BaseSyntheticEvent): void => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <div className="todo-input__wrapper">
      <Input
        value={inputValue}
        type="text"
        placeholder="Add new task"
        onChange={handleChange}
      />

      <Button
        className={classNames({
          'disabled': isBtnDisabled,
        })}
        onClick={handleAddTodo}
        disabled={isBtnDisabled}
        text={'TODO!'}
      />        
    </div>
  )
}
