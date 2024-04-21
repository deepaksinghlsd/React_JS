import React from "react";
import ListContaner from "./ListContaner";
 import style from "../App.module.css";
 import InputData from "./InputData";

const ComponentArray = ({ArrayData}) => {
    const ButtonClick = (index) => ArrayData.map((d , ind)=> {
      if(index === ind){
        console.log(`buy ${d}`)
      }
    });
  return (
    <div>
      
      <ListContaner>
        <p>Helo every one</p>
        <InputData ></InputData>
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
