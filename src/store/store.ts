import { configureStore } from '@reduxjs/toolkit'
import { ACTIONS } from './actions'
import { AppState, FILTERS } from './types'

interface Payload {
  id: number
  text: string
  filter: FILTERS
  todoLength: number
}

interface Action {
  type: string
  payload: Payload
}

const initialState: AppState = {
  todos: [],
  filter: FILTERS.ALL,
  todoLength: 20,
}

const todoReducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: state.todos.length + 1, text: action.payload.text, completed: false }],
      }
      
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      }

    case ACTIONS.SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      }

    case ACTIONS.SET_TODO_LENGTH:
      return {
        ...state,
        todoLength: action.payload.todoLength,
      }
    default:
      return state
  }
}

const store = configureStore({
  reducer: todoReducer,
})

export default store
