import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

    let btnText = 'Show Persons';
    let btnClass = '';
    let assignedClasses = [];

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    if (props.showPersons) {
        btnText = 'Hide Persons';
        btnClass = classes.red;
    }

    return (
        <div>
            <h1>Hi! I'm a react app</h1>
            <p className={assignedClasses.join(' ')}>This is working!</p>
            <button className={btnClass}
                onClick={props.clicked}>{btnText}
            </button>
        </div>
    );
}

export default Cockpit;