import { RiDeleteBin2Line } from "react-icons/ri";
function TodoItem({ todoName, todoDate , DeleteItem}) {
    return (
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button"
            onClick={()=>DeleteItem(todoName)}
            >
             <RiDeleteBin2Line />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;