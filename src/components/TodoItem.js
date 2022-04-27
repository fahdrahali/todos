import React, { useState } from 'react';
import styles from "./TodoItem.module.css"



 const TodoItem = (props) => {

    const [state, setState] = useState({ editing: false});

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }

      const handleEditing = () => {
        setState({ editing: true });
      }

     const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setState({ editing: false })
          }
      }

       const { title, completed, id } = props.todo;

        let viewMode = {}
        let editMode = {}

        if (state.editing) {
        viewMode.display = "none"
        } else {
        editMode.display = "none"
        }

        return <li className={styles.item}> 
        <div onClick={handleEditing}>
            <input 
            type='checkbox'
            className={styles.checkbox} 
            checked={completed}
            onChange={() => props.handleChange(id)}
            /> 
            <button onClick={() => props.handleDelete(id)}>Delete</button>
            <span style={completed ? completedStyle : null}>
            { title }
            </span>
            <input type='text' className={styles.textInput}   style={editMode}
            value={ title }
            onChange={(e) => {
                props.setUpdate(e.target.value, id)
              }}
            onKeyDown={handleUpdatedDone}
            />
         </div>
        </li>
    }
 
export default TodoItem;