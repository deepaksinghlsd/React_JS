import { useState } from "react";
import { MdAddBox } from "react-icons/md";
function AddTodo({onNewItem}) {
  const [toDoname, setoDoname] = useState('');
  const [todoDate, setodoDate] = useState('');
  const handnameChange = (event)=>{
    setoDoname(event.target.value);
  };
  const handaleDateChange =(event)=>{
    setodoDate(event.target.value);
  };
  const handelSubmit = ()=>{
    onNewItem(toDoname,todoDate);
   setoDoname('');
   setodoDate('');
  };
 

    return (
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" 
            value={toDoname}
            onChange={handnameChange}
            />
          </div>
          <div className="col-4">
            <input type="date"
            value={todoDate}
            onChange={handaleDateChange}
            />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button"
            onClick={handelSubmit}
            >
            <MdAddBox />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;
  