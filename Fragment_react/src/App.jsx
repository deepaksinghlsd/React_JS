import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // let Food = ["dal", "roti", "panier"];
  let Food = [];
  // if else condition in user interface
  // if(Food.length===0){
  //   return <h1>I am stell hungary</h1>
  // }
  return (
    <>
    <p>Helo every one</p>
     {Food.length===0 ? <h1>This is empety </h1> : null }
      <ul class="list-group">
        {Food.map((item) => {
          return <li>item {item} </li>;
        })}
      </ul>
    </>
  );
};

export default App;
