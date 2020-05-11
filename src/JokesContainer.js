import React, { Component } from 'react';
import Joke from './Joke';
import './JokesContainer.css';

class JokesContainer extends Component {

    render() {
        const sortedJokes = this.props.jokes.sort((a, b) => b.votes - a.votes);
        const jokes = sortedJokes.map(jokeObj => 
            <Joke key={jokeObj.id}
                id={jokeObj.id}
                text={jokeObj.joke} 
                updateVote={this.props.updateVote}
                votes={jokeObj.votes}/>);
        return (
            <div className="JokesContainer">
                {this.props.isLoading? <div className="load-container"><span className="loader"></span>Loading...</div> : jokes}
            </div>
        );
    }
}

export default JokesContainer;