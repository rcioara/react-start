import React, {Component} from 'react';
import classes from './../components/Cockpit/Cockpit.css';
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor (props) {
    super (props);
    console.log ('[App.js ] - Inside constructor() method');
  }

  componentWillMount () {
    console.log ('[App.js] - Inside componentWillMount() method');
  }

  componentDidMount () {
    console.log ('[App.js] - Inside componentDidMount() method');
  }

  state = {
    persons: [
      {id: 1, name: 'Max', age: '30', username: 'max'},
      {id: 2, name: 'Roxi', age: '28', username: 'roxi'},
      {id: 2, name: 'Oana', age: '29', username: 'oana'},
    ],
    showPersons: false,
  };

  togglePersonsHandler = () => {
    this.setState ({showPersons: !this.state.showPersons});
  };

  deletePersonHandler = idx => {
    const persons = [...this.state.persons];
    persons.splice (idx, 1);
    this.setState ({persons: persons});
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex (p => id === p.id);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ({persons: persons});
  };

  render () {
    console.log ('[App.js] - Inside render() method');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
          />
        </div>
      );
    }

    return (
      <WithClass classes={classes.Cockpit}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </WithClass>
    );
  }
}

export default App;
