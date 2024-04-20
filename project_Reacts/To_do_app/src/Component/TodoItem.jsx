import React from 'react'
import First from './First'
import ContentItem from './ContentItem'

const TodoItem = ({todoData}) => {
  return (
    <div>
<center className="todo-container"><h1 className='Todoheding' > Todo app  </h1>
    
    {/* First line */}
  
    <First></First>
     {/* Second Line */}
     {todoData.map((item) => (
        <ContentItem Todoname={item.name}  Tododate= {item.date}></ContentItem>
    )) }
     
     
        </center>
    </div>
  )
}

export default TodoItem