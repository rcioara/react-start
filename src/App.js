import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: '30'},
      {id: 2, name: 'Roxi', age: '28'}
    ],
    showPersons: false
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

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler= (idx) => {
     // const persons = this.state.persons.slice(); // just copy the array
      const persons = [...this.state.persons];
      persons.splice(idx,1);
      this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    let btnText = 'Show Persons';
    let persons = null;

    if(this.state.showPersons){
      persons = (this.state.persons.map((el, index) => {
        return ( <Person click={() => this.deletePersonHandler(index)} 
                         key={index}
                         name={el.name}
                         age={el.age} 
                         change={this.changeNameHandler}/>)
        }));
      btnText = 'Hide Persons';
    }
   
    return (
      <div className="App">
        <h1>Hi! I'm a react app</h1>
        <button style={style} 
                onClick={this.togglePersonsHandler}>{btnText}    
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
