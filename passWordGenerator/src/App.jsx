import React, { useCallback, useEffect, useState } from 'react'

const App = () => {
  const [ password , setPassword] = useState();
  const [length , setLength] = useState(8);
  const [character , setCharater] = useState(false);
  const [number , setNimber] = useState(false)

  const passwordgenerator = useCallback( ()=>{
    let pass = ""
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(number) char+="1234567890";
    if(character) char +="~!@#%^&*()_+";
    console.log(number);
    
    for(let i = 1; i < length; i++){
      pass += char.charAt(Math.floor(Math.random() * char.length));
    }
    setPassword(pass)
    
  },[length ,character , number, setPassword]);
  useEffect(() => {
    passwordgenerator();
  } , [length , number , character])


  return (
    <div>
      <h1>
        passwordgenerator
      </h1>
      <input type="text" readOnly value={password} />
      <div>
      <label htmlFor="#">
         length{length}
      <input type="range" min={6} max={100} value={length}  onChange={(e)=>(setLength(e.target.value))} />
      </label>
      <label>
        character
        <input type="checkbox" onChange={(e) => (setCharater((prev)=>!prev))} />
      </label>
      <label>
        number
        <input type="checkbox"   onChange={(e)=>(setNimber((prev)=> !prev))}/>
      </label>

      </div>
    </div>
  )
}

export default App