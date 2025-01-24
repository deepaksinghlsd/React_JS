import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask ,  editTask } from "../redux/TodoSlices";

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const Todolist = useSelector((state) => state.todos);
  const [edit, setEdit] = useState(null);
  console.log(Todolist);

  const handleAddButton = () => {
    if (task.trim()) {
      dispatch(addTask({ text: task, id: Date.now() }));
      setTask("");
    }
  };
 const HandleEdit=(task)=>{
    setEdit(task.id),
    setTask(task.text)
 }

 const handleSaveEdit = () => {
    if(task.trim()&& edit){
        dispatch(editTask({id:edit, text:task}));
        setEdit(null);
    setTask("");
 }
    };
    

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div>
      <div className="flex justify-center py-2">
        <input
          type="text"
          className="bg-slate-400"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task These"
        />
        {
            edit ? (
                <button onClick={handleSaveEdit}>Save</button>
            ):(<button
                onClick={() => handleAddButton(task)}
                className="bg-gray-600 px-4 "
              >
                Add
              </button>)
        }
      </div>
      {/* Display task */}

      <div className="ml-[40%]">
        <h1>Task List</h1>
        <ul>
          {Todolist.map((task, index) => (
            <li key={task.id}>
              <span>
                {index + 1}. {task.text}
              </span>
              <span>{task.id}</span>
              <button onClick={()=>HandleEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AddTask;
