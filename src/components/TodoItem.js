import React from 'react';


 const TodoItem = (props) => {
       const { title, completed, id } = props.todo;
        return <li> 
            <input 
            type='checkbox' 
            checked={completed}
            onChange={() => props.handleChange(id)}
            /> 
            { title }
            
            </li>
    }
 
export default TodoItem;