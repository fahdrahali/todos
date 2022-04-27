import React  from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from './TodosList';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

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

  render() {
    return (
      <div className="container">
      <div className="inner">
      <Header />
      <InputTodo handleSubmit={this.addTodo}/> 
      <TodosList 
          todos={this.state.todos}  
          handleChange={this.handleChange} 
          handleDelete={this.delTodo} />
        </div>
    </div>
    );
  }
}
export default TodoContainer;
