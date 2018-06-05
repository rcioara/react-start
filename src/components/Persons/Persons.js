import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return <Person
                click={() => props.clicked(index)}
                key={person.id}
                name={person.name}
                age={person.age}
                change={(event) => props.changed(event, index)}
            />
        }));
}

export default Persons;