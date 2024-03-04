export interface Todo {
  id: number
  text: string
  completed: boolean
}

export enum FILTERS{
  ALL = 'All',
  COMPLETED = 'Completed',
  ACTIVE = 'Active',
}

export interface AppState {
  todos: Todo[]
  filter: string
  todoLength: number
}
