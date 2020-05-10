import React, { Component } from 'react';
import Joke from './Joke';
import './JokesContainer.css';

class JokesContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const jokes = this.props.jokes.map(jokeObj => 
            <Joke key={jokeObj.id}
                text={jokeObj.joke} 
                votes={0}/>);
        return (
            <div className="JokesContainer">
                {jokes}
            </div>
        );
    }
}

export default JokesContainer;