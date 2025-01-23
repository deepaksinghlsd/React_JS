import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, DeleteItem}) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem DeleteItem={DeleteItem} todoDate={item.dueDate} todoName={item.name} key={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;