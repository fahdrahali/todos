import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodosList extends Component {


    render() { 
        return (
            <ul>
            {this.props.todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} handleChange={this.props.handleChange} />
            ))}
          </ul>
        );
    }
}
 
export default TodosList;