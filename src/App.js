import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: '30', username: 'max' },
      { id: 2, name: 'Roxi', age: '28', username: 'roxi' },
      { id: 2, name: 'Oana', age: '29', username: 'oana' }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  deletePersonHandler = (idx) => {
    const persons = [...this.state.persons];
    persons.splice(idx, 1);
    this.setState({ persons: persons });
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => id === p.id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    }

    let btnText = 'Show Persons';
    let persons = null;

    if (this.state.showPersons) {
      persons = (this.state.persons.map((el, index) => {
        return (<Person click={() => this.deletePersonHandler(index)}
          key={el.id}
          name={el.name}
          age={el.age}
          change={(event) => this.changeNameHandler(event, index)} />)
      }));
      btnText = 'Hide Persons';
      style.backgroundColor = 'red';

    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (

      <div className="App">
        <h1>Hi! I'm a react app</h1>
        <p className={classes.join(' ')}>This is working!</p>
        <button style={style}
          onClick={this.togglePersonsHandler}>{btnText}
        </button>
        {persons}
      </div>

    );
  }
}

export default App;
