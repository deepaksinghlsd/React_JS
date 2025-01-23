import React, { useState } from 'react'
import couterContext from './store/couterContext'
import { useContext } from 'react';

const App = () => {
  const {count} = useContext(couterContext)
  const [countValue , setCountValue] = useState(count);

  const addHandler = () => {
    setCountValue(countValue + 1)
  }
  const subHandler = () => {
    setCountValue(countValue - 1)
  }
  
  return (
    <couterContext.Provider value={countValue}>
    <div>
      <button onClick={addHandler}>Add</button>
      {countValue}
      <button onClick={subHandler}>Sub</button>
    </div>
    </couterContext.Provider>
  )
}

export default App