import {useState} from "react";
import {useSelector ,useDispatch} from "react-redux";
import {addTodo , editTodo ,deleteTodo} from "../redux/todoSlice"
const AddTask =()=>{
    const [text , setText]= useState("");
    const [edit , setEdit]=useState(null);
    const todos = useSelector((state)=> state.todos);
    const dispatch = useDispatch();

    const handleEdit = (todo)=>{
          setEdit(todo.id),
          setText(todo.text)
    }

    const handeSave = () =>{
      if(text.trim()&&edit !== null){
        dispatch(editTodo({id:edit , text})),
        setEdit(null),
        setText("");
      }
    }

    const handleAdd = ()=>{
        if(text.trim() !==""){
            dispatch(addTodo({id:Date.now(), text , completed: false}));
            setText("");
        }
         }
    return(
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
  <h1 className="text-3xl font-bold text-gray-800 mb-6">To-Do App</h1>

  <div className="flex gap-2 mb-6">
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter your task"
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 w-64"
    />
    
    { edit ?(
      <button onClick={handeSave}>Save</button>
    )
   :( <button
    onClick={handleAdd}
    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
  >
    Add
  </button>)

    }
  </div>

  <ul className="w-3/4 max-w-xl">
    {todos.map((todo , index) => (
      <li
        key={todo.id}
        className="flex justify-between items-center bg-white shadow rounded-lg px-4 py-2 mb-4"
      >
        <span>
          {index+1}.{todo.text}
        </span>
        <button
          onClick={() =>handleEdit(todo)}
          className="text-green-500 hover:text-green-700 transition"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="text-red-500 hover:text-red-700 transition"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
</div>

    )
}
export default AddTask