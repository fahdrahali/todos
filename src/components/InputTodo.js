import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({ 
           [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim()) {
        this.props.handleSubmit(this.state.title);
        this.setState({
            title: ""
          });
        } else {
            alert("Please write item")
        }
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input 
            type="text"
            className="input-text"
            name= 'title'
            placeholder="Add Todo..." 
            value={this.state.title}
            onChange={this.handleChange}
            />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
export default InputTodo