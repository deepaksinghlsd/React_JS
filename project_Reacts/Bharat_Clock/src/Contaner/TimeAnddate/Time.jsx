import React from 'react'
import './Time.css'
const Time = () => {
    const Time = new Date();
  return (
    <div className='Time'>
        <span>Today date: {Time.toLocaleDateString()} and time :- {Time.toLocaleTimeString()}</span>
    </div>
  )
}

export default Time