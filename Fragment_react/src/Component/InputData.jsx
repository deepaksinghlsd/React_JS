import React from 'react'

const InputData = (props) => {
   
  return (
    <div>
        <input type="text" value={props.TextShow} placeholder='Enter the food' onKeyDown={props.DisplayItem} />
    </div>
  )
}

export default InputData