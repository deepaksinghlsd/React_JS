// import React from 'react'

// const App = () => {
//   let Marks = 90 ;
//   const MarksUpadete = ()=>{
//     console.log(Marks);
//     Marks= 55;
//     console.log(Marks);
//   }

//   return (
//     <React.Fragment>
//       <h1  className='font-bold text-white '>The marks are : {Marks}</h1>
//       <button onClick={()=>{
//         MarksUpadete()
//       }} className='bg-gray-800 mx-5 my-3 rounded  text-center text-white font-bold'>Update</button>
//        </React.Fragment>
//   )
// }

// export default App// This way is not  working because of the scope issue, so we will use useState and useEffect hook to solve thisimport React, { useState} from "reactimport React, { useState} from "react

// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   const [marks, setMarks] = useState(90)
//   return (
//     <React.Fragment>
//       <h1>The marks are {marks}</h1>
//       <button onClick={()=>{setMarks(56)}} className='bg-gray-600 py-5 px-3 m-3 rounded'>Update</button>
//     </React.Fragment>

//   )
// }

// export default App// using usestate  hook to update the value of marks

import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import User from "./Component/User/User";

const App = () => {
  const [user, setuser] = useState("");
  const [name, setname] = useState("Deepak");
  const inputHandler = (e) => {
    setuser(e.target.value);
    console.log(user);
  };
  return (
    <React.Fragment>
      <Navbar userName={user} Nam={name}/>
      <div>
        <input type="text" onChange={inputHandler} value={user} />
      </div>
      <div>
        <h1>This is {name} this side </h1>
      </div>
      <User />
      {/* This is comment in jsx{JavaScriptXML}*/}
    </React.Fragment>
  );
};

export default App;
