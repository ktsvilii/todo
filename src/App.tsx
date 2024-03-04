import React from "react"
import { ActionButtons, TodoList, TodoInput, TodoLengthControl, Counters } from "./components"

import './App.css'

const App: React.FC = () => {
  return (
    <>
      <h1>ToDo App</h1>
      <Counters />
      <TodoInput />
      <TodoList />      
      <div className="controls">
        <ActionButtons />
        <TodoLengthControl />
      </div>
    </>
  )
}

export default App
