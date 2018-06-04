import React, { Component } from 'react';
import Image from './Image';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Image placeHolderImage={ "http://via.placeholder.com/350x150" } />
      </div>
    );
  }
}

export default App;
