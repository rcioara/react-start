import React from 'react';
import classes from './Person.css';

const Person = (props) => {
    const rdn = Math.random();
    if (rdn < 0.7) {
        throw new Error('Less then 0.7');
    }
    return (
        <div className={classes.Person} >
            <p onClick={props.click}> Hi! My name is {props.name} and I'm {props.age} years old</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    );
}

export default Person;