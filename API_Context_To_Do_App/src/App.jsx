

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessade from "./components/WelcomeMessade";
import "./App.css";
import { useState } from "react";

function App() {
  const initialtodoItem = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
  
  ];
  const[todoItems , setTodoItems]=useState(initialtodoItem);
  const  handerNewItem = (itemName , itemdueDate)=>{
    console.log(`name:${itemName}  date: ${itemdueDate}`);
    const newTodoItem =  [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemdueDate,
      }
    ];

    setTodoItems(newTodoItem);

  };
const handelDelete = (todoItemName) =>{
  const updateData = todoItems.filter((item) => item.name !== todoItemName);
  setTodoItems(updateData);
};
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handerNewItem} />
  {todoItems.length === 0 && <WelcomeMessade></WelcomeMessade>}
      <TodoItems todoItems={todoItems} DeleteItem={handelDelete} ></TodoItems>
    </center>
  );
}

export default App;
