import { FILTERS } from "./types"

export enum ACTIONS {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  SET_FILTER = "SET_FILTER",
  SET_TODO_LENGTH = "SET_TODO_LENGTH",
}

export const addTodo = (text: string): any => ({
  type: ACTIONS.ADD_TODO,
  payload: { text },
})

export const toggleTodo = (id: number): any => ({
  type: ACTIONS.TOGGLE_TODO,
  payload: { id },
})

export const setFilter = (filter: FILTERS): any => ({
  type: ACTIONS.SET_FILTER,
  payload: { filter },
})

export const setTodoMaxLength = (todoLength: number): any => ({
  type: ACTIONS.SET_TODO_LENGTH,
  payload: { todoLength },
})
