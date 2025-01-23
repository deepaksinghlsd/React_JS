import React from 'react'

const Excaption = ({HealthyFoodItem}) => {
    
  return HealthyFoodItem.length === 0 && <p>I am Still Hungry</p>
  
}

export default Excaption