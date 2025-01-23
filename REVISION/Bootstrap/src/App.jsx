
import React, { useState } from 'react'
import Contener from './Components/Contener'
import Excaption from './Components/Excaption'
import Items from './Components/Items'
const App = () => {
  let Fooditem = ["dal", "roti", 'salad', "Ghee"]
  let [HealthyFoodItem , SethealthyFood] = useState(["Ghee","Bhaat","Dal","Sabji","Roti"])
  const HandeleronKeyDown = (event)=>{
    if(event.key === "Enter"){
      
  SethealthyFood([...HealthyFoodItem,event.target.value])
  event.target.value="";
 }
 
}
  
  return (
    <>
    <center>
      <h1>Todo App</h1>
      <div className="container text-center">
  <div className="row">
    <div className="col-sm-4"> <input type="text" placeholder='Enter Todo here'/> </div>
    <div className="col-sm-4"><input type="date" /></div>
    <div className="col-sm-2">
    <button type="button" className="btn btn-outline-success">Add</button>
    </div>
  </div>
</div>
<ul className="list-group">

  {Fooditem.map((item)=>(<li class="list-group-item">{item}</li>))}
  
  </ul>
  <h5>------------------------------------------</h5>
  
  <Contener OnkeyDownHandeler={HandeleronKeyDown} >
    <Excaption HealthyFoodItem={HealthyFoodItem}></Excaption>
    <Items HealthyFoodItem={HealthyFoodItem}></Items>
  </Contener>
  

    </center>

    </>
  )
}


export default App