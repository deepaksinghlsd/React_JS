import React from 'react'

const ContentItem = ( {Todoname , Tododate}) => {
   
  return (
    <>
     <div className="row bg-row">
  <div className="col-6">
    {Todoname}
  </div>
    <div className="col-4">
    {Tododate}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger bg-battan">Danger</button>
    </div>
  </div>
    </>
  )
}

export default ContentItem