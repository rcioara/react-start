import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}> Hi! My name is {props.name} and I'm {props.age} years old</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    );
}

export default Radium(Person);