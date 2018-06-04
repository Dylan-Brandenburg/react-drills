import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      userName: "",
      userPass: "",
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleNameChange(val){
    this.setState({ userName: val})
  }
  handlePasswordChange(val){
    this.setState({ userPass: val})
  }
  handleClick(){
    alert(`Username: ${ this.state.userName } Password: ${ this.state.userPass }`);
  }
  // this.userName = this.userName.bind(this);
  // this.userPass = this.userPass.bind(this);

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <input type="text" placeholder="UserName" onChange={e => this.handleNameChange(e.target.value)} />
        <input type="password" placeholder="User Password" onChange={e => this.handlePasswordChange(e.target.value)} />
        <button onClick={this.handleClick}>Login</button>
        </div>

      </div>
    );
  }
}

export default App;
