import { FILTERS } from './types'

export enum TodoActions {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  SET_FILTER = 'SET_FILTER',
  SET_TODO_LENGTH = 'SET_TODO_LENGTH',
}

export const addTodo = (text: string): any => ({
  'type': TodoActions.ADD_TODO,
  'payload': { text },
})

export const toggleTodo = (id: number): any => ({
  'type': TodoActions.TOGGLE_TODO,
  'payload': { id },
})

export const setFilter = (filter: FILTERS): any => ({
  'type': TodoActions.SET_FILTER,
  'payload': { filter },
})

export const setTodoMaxLength = (todoLength: number): any => ({
  'type': TodoActions.SET_TODO_LENGTH,
  'payload': { todoLength },
})
