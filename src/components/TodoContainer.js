import React from "react"
class TodoContainer extends React.Component {
    state = {
        todos: []
    }
  render() {
    return (
      <React.StrictMode>
        <h1>Hello from Create React App</h1>
        <p>I am in a React Component!</p>
      </React.StrictMode>
    )
  }
}
export default TodoContainer