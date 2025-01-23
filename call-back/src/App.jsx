import React from 'react'

const App = () => {
  const clickHandler = (color) => {
    console.log(color)
  }
  return (
    <div>
      <button onClick={()=>{clickHandler("green")}}>green</button>
      <button onClick={()=>{clickHandler("red")}}>red</button>
    </div>
  )
}

export default App