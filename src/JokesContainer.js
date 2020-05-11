import React, { Component } from 'react';
import Joke from './Joke';
import './JokesContainer.css';

class JokesContainer extends Component {

    render() {
        const jokes = this.props.jokes.map(jokeObj => 
            <Joke key={jokeObj.id}
                id={jokeObj.id}
                text={jokeObj.joke} 
                updateVote={this.props.updateVote}
                votes={jokeObj.votes}/>);
        return (
            <div className="JokesContainer">
                {jokes}
            </div>
        );
    }
}

export default JokesContainer;