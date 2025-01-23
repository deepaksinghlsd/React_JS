import React from 'react'

const Items = ({HealthyFoodItem}) => {
  return (
    <div>
        <ul class="list-group">{HealthyFoodItem.map((item)=><li class="list-group-item" key ={item}>{item} <button type="button" class="btn btn-success">Buy</button> </li> )
}
  
</ul>
    </div>
  )
}

export default Items