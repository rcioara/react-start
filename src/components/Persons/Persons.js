import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Persons.js] - Inside constructor() method');
    }

    componentWillMount() {
        console.log('[Persons.js] - Inside componentWillMount() method');
    }

    componentDidMount() {
        console.log('[Persons.js] - Inside componentDidMount() method');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Persons.js] - Inside componentWillReceiveProps() method : ');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] - Inside shouldComponentUpdate() method : ');
        return nextProps !== this.props.persons;
    }

    render() {
        console.log('[Persons.js] - Inside render() method');
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.clicked(index)}
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    change={(event) => this.props.changed(event, index)}
                />
            }));
    }
}
export default Persons;