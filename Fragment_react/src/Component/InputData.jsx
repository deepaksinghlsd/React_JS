import React from 'react'

const InputData = () => {
    const DisplayItem = (event) => {
        console.log(event.target.value);
    }
  return (
    <div>
        <input type="text" placeholder='Enter the food' onChange={DisplayItem} />
    </div>
  )
}

export default InputData