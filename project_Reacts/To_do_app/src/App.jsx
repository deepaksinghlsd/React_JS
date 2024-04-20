import React from 'react'
import TodoItem from './Component/TodoItem'
import "././App.css"

const App = () => {
  const TodoList = [
    {
      name: "ByMilk",
     date: "16/05/2024",

    },
    {
      name: "Go to Collage",
      date: "16/05/2024"
    },
    {
      name: "Go to Gym",
      date: "16/05/2024"
    }
  ]

  return (
    <>
    <TodoItem todoData={TodoList} />
    </>
  )
}

export default App