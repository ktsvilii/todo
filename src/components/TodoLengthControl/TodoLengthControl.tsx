import { BaseSyntheticEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState, setTodoMaxLength } from "../../store"
import { Button } from "../Button"
import { Input } from "../Input"

export const TodoLengthControl = (): JSX.Element => {
  const maxLength = useSelector((state: AppState) => state.todoLength)
  const [todoLength, setTodoLength] = useState(maxLength)

  const dispatch = useDispatch()

  const changeLength = (e: BaseSyntheticEvent): void => {
    setTodoLength(e.currentTarget.value)
  }

  const setMaxTodoLength = (): void => {
    dispatch(setTodoMaxLength(todoLength))
  }

  return (
    <>
      <Input type="number" value={todoLength} onChange={changeLength} className="input-number" />
      <Button onClick={setMaxTodoLength} text={'Set length'} />
    </>
  )
}
