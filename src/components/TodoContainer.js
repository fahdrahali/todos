import React  from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from './TodosList';

class TodoContainer extends React.Component {
  state = {
    todos: []
  };


  componentDidMount = () => {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
  if (loadedTodos) {
    this.setState({
      todos: loadedTodos
    })
  } else {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(result => result.json())
    .then(data => this.setState({todos: data}))
  }
}
  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }
  } 

    handleChange = (id) => {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) todo.completed = !todo.completed;
          return todo;
        })
      })
    }

    delTodo = id => {
      this.setState({
        todos: [
          ...this.state.todos.filter( (todo) => todo.id !== id)
        ]
      })
    };

    addTodo = (title) => {
      this.setState({
        todos: [
          ...this.state.todos,
          { id: this.state.todos.length + 1, title: title, completed: false}
        ]
      })
    }

    setUpdate = (updatedTitle, id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.title = updatedTitle
          }
          return todo
        }),
      })
    }

  render() {
    return (
      <div className="container">
      <div className="inner">
      <Header />
      <InputTodo handleSubmit={this.addTodo}/> 
      <TodosList 
          todos={this.state.todos}  
          handleChange={this.handleChange} 
          handleDelete={this.delTodo} 
          setUpdate={this.setUpdate}
          />
        </div>
    </div>
    );
  }
}
export default TodoContainer;
