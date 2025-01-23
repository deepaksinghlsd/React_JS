import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ComponentArray from "./Component/ComponentArray";
import style from "./App.module.css";
import InputData from "./Component/InputData";

const App = () => {

  //  let Food = ["dal", "roti", "panier","salad"];
  //  let [Food, setFood] = useState(["dal", "roti", "panier","salad"]);

 
  // let Food = [];
  // if else condition in user interface
  // if(Food.length===0){
  //   return <h1>I am stell hungary</h1>}
 
  return (
   
    <>
    <ComponentArray  />
  
    {/* <ListContaner>
    <p>Helo every one</p>
    {Food.length===0 ? <h1>This is empety </h1> : null }
      <ul className={` ${style.Unorderlis} list-group`} >
        {Food.map((item , ind , arr) => {
          return <li className="list-group-item" key={ind}>item {item} 
          <button className= {`${style.Listcon} btn btn-success`} onClick={(event)=>clickButton(item , event)}>Buy</button>
          </li>;
          
        })}
      </ul>
    </ListContaner> */}
        {/* <ListContaner>
          deepak
        </ListContaner> */}
    </>
  );
};

export default App;
