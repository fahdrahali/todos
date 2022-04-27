import React, { useState } from "react"

const InputTodo = (props) => {
    
  const [title, setTitle] = useState({title: ''});

    const handleChange = (e) => {
        setTitle({ 
           [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
        props.handleSubmit(this.state.title);
        setTitle({
            title: ""
          });
        } else {
            alert("Please write item")
        }
    }

    return (
      <form onSubmit={handleSubmit} className="form-container">
        <input 
            type="text"
            className="input-text"
            name= 'title'
            placeholder="Add Todo..." 
            value={title}
            onChange={handleChange}
            />
        <button className="input-submit">Submit</button>
      </form>
    )
  }

export default InputTodo