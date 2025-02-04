import React from 'react'

const Bubling = () => {
    const handleClick = (e) => {
        if(e.target.classList.contains("child")){
          alert(`Button clicked : ${e.target.innerText}`)
        }
      }
      const arry = [1 , 2 ,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    
  return (
    <div id= "parent" onClick={handleClick} style={{padding:"20px", border: "1px solid black`"}}>
    {arry.map((i) => (
        <button key={i} id={i} className="child" >
          Bt-{i}
        </button>
      ))}
    </div>)}
  


export default Bubling