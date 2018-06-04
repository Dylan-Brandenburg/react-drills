import React, { Component } from "react";
import Todo from "./Todo";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      todoInput: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(val) {
    this.setState({ todoInput: val });
  }

  handleClick(){
    
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Todo List:</h1>
          <input
            type="text"
            placeholder="todo"
            onChange={e => this.handleChange(e.target.value)}
          />
          <button onClick={ this.handleClick}>Add</button>
        </div>
        <h3> {Todo} </h3>
      </div>
    );
  }
}

export default App;
