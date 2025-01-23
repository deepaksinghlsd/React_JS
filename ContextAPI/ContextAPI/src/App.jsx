import React from "react";
import createContextt from "./assets/Store/context";


const App = () => {
  return (
   <>
      <createContextt.Provider>
        <h1> Increment and Decrement Button</h1>
        <button> Increment</button>
        <button> Decrement</button>
      </createContextt.Provider>
      </>
  
  );
};

export default App;
