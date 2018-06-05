import React from 'react';
import './Person.css';

const Person = (props) => {

    return (
        <div className="Person" >
            <p onClick={props.click}> Hi! My name is {props.name} and I'm {props.age} years old</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    );
}

export default Person;