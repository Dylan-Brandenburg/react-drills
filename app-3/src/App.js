import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: ["Dallas", "Seattle", "Austin", "Miami", "Tampa"],
      filterString: ""
    };
  }
  handleChange( filter) {
    this.setState({ filterString:filter });
  }
  render() {
    let cityList = this.state.cities.filter( (element, index) => { 
      return element.includes(this.state.filterString);
    }).map( ( element, index ) => {
      return <h2 key= {index}> {element}</h2>
    })

    return (
      <div className="App">
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        {cityList}
      </div>
    );
  }
}

export default App;
