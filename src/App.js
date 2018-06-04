import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: '30'},
      {name: 'Roxi', age: '28'}
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a react app</h1>
        {this.state.persons.map(el => {return (<Person name={el.name} age={el.age} />)})}
      </div>
    );
  }
}

export default App;
