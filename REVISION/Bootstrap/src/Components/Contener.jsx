import React from 'react'

const Contener = ({children , OnkeyDownHandeler} ) => {
  return (
    <div>
        <h1>Healthy food</h1>
    <input type="text"  placeholder='Enter the healthy food'

   onKeyDown={OnkeyDownHandeler}
    />{children}
    </div>
  )
}

export default Contener