import React from 'react';

const Person = (props) => {
    return (
        <p>Hi! My name is {props.name} and I'm {props.age} years old</p>
    );
}

export default Person;