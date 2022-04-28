import React, { useEffect, useState }  from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from './TodosList';

const TodoContainer = () => {
  
  const [todos, setTodos] = useState([])


  useEffect(() => {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
  if (loadedTodos) {
    setTodos({
      todos: loadedTodos
    })
  } else {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(result => result.json())
    .then(data => setTodos(data))
  }
  console.log('test run', todos);
},[setTodos])


  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.todos !== this.state.todos) {
  //     const temp = JSON.stringify(this.state.todos)
  //     localStorage.setItem("todos", temp)
  //   }
  // } 

    const handleChange = (id) => {
      setTodos([...todos.map((todo) => {
          if (todo.id === id) todo.completed = !todo.completed;
          return todo;
        })]
      )}

    const delTodo = id => {
      setTodos([
          ...todos.filter( (todo) => todo.id !== id)
        ]
      )
    };

    const addTodo = (title) => {
      setTodos(
        [
          ...todos,
          { id: todos.length + 1, title: title, completed: false}
        ]
      )
    }

    const setUpdate = (updatedTitle, id) => {
      setTodos(
        [...todos.map(todo => {
          if (todo.id === id) {
            todo.title = updatedTitle
          }
          return todo
        })]
      )
    }

    return (
      <div className="container">
      <div className="inner">
      <Header />
      <InputTodo handleSubmit={addTodo}/> 
      <TodosList 
          todos={todos}  
          handleChange={handleChange} 
          handleDelete={delTodo} 
          setUpdate={setUpdate}
          />
        </div>
    </div>
    );
  }

export default TodoContainer;
