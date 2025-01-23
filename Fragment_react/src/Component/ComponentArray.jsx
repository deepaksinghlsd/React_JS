import React, { useState } from "react";
import ListContaner from "./ListContaner";
 import style from "../App.module.css";
 import InputData from "./InputData";
 

const ComponentArray = () => {
  let [ArrayData, setItem] = useState(["dal", "roti", "panier","salad"]);
  
  let [TextShow , setTextShow] = useState("Enter the Data");
    const ButtonClick = (index) => ArrayData.map((d , ind)=> {
      if(index === ind){
        console.log(`buy ${d}`)
      }
    });
    // let TextShow = "Input Data";
    const DisplayItem = (event) => {
      // console.log(event.target.value);
      if(event.key==="Enter"){
      console.log(event.target.value);
       
         let newData = setTextShow(event.target.value);
         console.log(TextShow);
      //   // event.target.value="";
        let newIem = [...ArrayData, setTextShow];
        // setItem(newIem); 
      }

      
      
  };
 
 
 
  return (
    <div>
      
      <ListContaner>
        <p>Helo every one</p>
        <InputData DisplayItem={DisplayItem}></InputData>
        <p>{TextShow}</p>
        <ul className="list-group">
          {ArrayData.map((data, index, Arr) => (
            <li className="list-group-item" key={index}>
              {data}
              <button type="button" className= {`${style.Listcon} btn btn-success`} onClick={()=> ButtonClick(index)}>Buy</button>
            </li>
          ))}
        </ul>
      </ListContaner>
    </div>
  );
};

export default ComponentArray;
