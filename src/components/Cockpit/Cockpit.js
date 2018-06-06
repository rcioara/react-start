import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = props => {
  let btnText = 'Show Persons';
  let btnClass = classes.Button;
  let assignedClasses = [];

  if (props.persons.length <= 2) {
    assignedClasses.push (classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push (classes.bold);
  }

  if (props.showPersons) {
    btnText = 'Hide Persons';
    btnClass = [classes.Button, classes.red].join ('');
  }

  return (
    <Aux>
      <h1>Hi! I'm a react app</h1>
      <p className={assignedClasses.join (' ')}>This is working!</p>
      <button className={btnClass} onClick={props.clicked}>
        {btnText}
      </button>
    </Aux>
  );
};

export default Cockpit;
