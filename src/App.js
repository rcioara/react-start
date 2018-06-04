import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: '30'},
      {id: 2, name: 'Roxi', age: '28'}
    ]
  };

  switchNameHandler = (newName) => {
      this.setState({persons: [
        {id: 1, name: newName, age: '30'},
        {id: 2, name: 'Roxana', age: '28'}
      ]});
  }

  changeNameHandler = (event) => {
    this.setState({persons: [
      {id: 1, name: event.target.value, age: '30'},
      {id: 2, name: 'Roxana', age: '28'}
    ]});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }
    return (
      <div className="App">
        <h1>Hi! I'm a react app</h1>
        <button style={style} 
                onClick={this.switchNameHandler.bind(this, 'Maxzxc!')}>
                Switch name
        </button>
        {this.state.persons.map(el => {
          return ( <Person click={this.switchNameHandler.bind(this, 'Max!')} 
                           key={el.id}
                           name={el.name}
                           age={el.age} 
                           change={this.changeNameHandler}/>)
          })}
      </div>
    );
  }
}

export default App;
