import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cities: [
        "Dallas",
        "Seattle",
        "Austin",
        "Miami",
        "Tampa"
      ]
    }
  }

  render() {
    let cityList = this.state.cities.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })

    return (
      <div className="App">
        { cityList }
      </div>
    );
  }
}

export default App;
