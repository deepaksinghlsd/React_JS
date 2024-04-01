import React from 'react'
import "././App.css"

const App = () => {
  return (
    <center className="todo-container"><h1 className='Todoheding' > Todo app  </h1>
    
{/* First line */}

  <div class="row bg-row">
  <div class="col-6 box">
    <input type="text" placeholder='Enter Todo Here' />
  </div>
    <div class="col-4 box">
      <input type="date" />
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success bg-battan">Add</button>
    </div>
  </div>
 {/* Second Line */}
  <div class="row bg-row">
  <div class="col-6">
    Buy Milk
  </div>
    <div class="col-4">
     01/04/2024
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger bg-battan">Danger</button>
    </div>
  </div>

  {/* Third Line */}
  <div class="row bg-row">
  <div class="col-6">
    Go to Collage
  </div>
    <div class="col-4">
     01/04/2024
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger bg-battan">Danger</button>
    </div>
  </div>
 
    </center>
  )
}

export default App