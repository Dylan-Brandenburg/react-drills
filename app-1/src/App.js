import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }
  handleChange(event) {
    this.setState({ message: event });
  }
  render() {
    return (
      <div className="App">
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
