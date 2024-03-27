import React , {useState} from 'react'
import Home from './Component/Home/Home'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact';
import {Myname} from './Component/About/About.jsx'
import "./App.css"


function App() {
  const [count, setCount] = useState(0);  

  function incrementHandler(){
    setCount(count+1)

  }

  function DecrementHandler(){
    if(count <= 0){
      alert("You can not go below zero")
    }else{
      setCount(count-1)
    }
  }
  
  return (
    <>
      <div>{count}</div>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={DecrementHandler}>Decerement</button>
      <br/>
      <Home/>
      <About/>
      <Contact/>
      <Myname/>
    </>
  )
}

export default App