import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] - Inside constructor() method');
    }

    componentWillMount() {
        console.log('[Person.js] - Inside componentWillMount() method');
    }

    componentDidMount() {
        console.log('[Person.js] - Inside componentDidMount() method');
    }

    render() {
        return (
            <div className={classes.Person} >
                <p onClick={this.props.click}> Hi! My name is {this.props.name} and I'm {this.props.age} years old</p>
                <input type="text" onChange={this.props.change} value={this.props.name}></input>
            </div>
        );
    }
}

export default Person;