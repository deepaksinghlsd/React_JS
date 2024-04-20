import React from 'react'

const First = () => {
  return (
    <div>
         <div className="row bg-row">
  <div className="col-6 box">
    <input type="text" placeholder='Enter Todo Here' />
  </div>
    <div className="col-4 box">
      <input type="date" />
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success bg-battan">Add</button>
    </div>
  </div>
    </div>
  )
}

export default First