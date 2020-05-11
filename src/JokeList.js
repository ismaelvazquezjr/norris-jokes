import React, { Component } from 'react';
import Banner from './Banner';
import JokesContainer from './JokesContainer';
import './JokeList.css';

const ESCAPE_JAVASCRIPT_STRINGS = '?escape=javascript'; 
const CHUCK_NORRIS_API = 'http://api.icndb.com/jokes/random/';

class JokeList extends Component {
    static defaultProps = {
        numJokesToFetch: 10
    }

    constructor(props) {
        super(props);

        this.state = {
            jokeObjects: JSON.parse(window.localStorage.getItem("jokes") || "[]")
        }

        this.handleVote = this.handleVote.bind(this);
        this.getNewJokes = this.getNewJokes.bind(this);
    }

    componentDidMount() {
        if (this.state.jokeObjects.length === 0) this.getNewJokes();
    }

    async getNewJokes() {
        let jokeObjects = await this.getJokeObjects().then(data => data).catch(err => {throw new Error(err)});
        for (let i = 0; i < jokeObjects.length; i++) {
            jokeObjects[i].votes = 0;
        }
        this.setState({
            jokeObjects: jokeObjects
        });

        window.localStorage.setItem("jokes", JSON.stringify(jokeObjects));
    }

    // getJokeObjects - returns a joke object if the api request succeeds
    // and null for any other reason
    async getJokeObjects() {
        try {
            const jokeObjects = await fetch(CHUCK_NORRIS_API + this.props.numJokesToFetch + ESCAPE_JAVASCRIPT_STRINGS)
                .then(res => res.json())
                .catch(err => {throw new Error(err)});
                return jokeObjects.value;
        } catch (e) {
            console.log(e);
        }
        return null;
    }

    handleVote(id, delta) {
        this.setState(st => {
            const updatedJokes = st.jokeObjects.map(joke => 
                joke.id === id 
                ? {...joke, votes: joke.votes + delta} 
                : joke);
            window.localStorage.setItem("jokes", JSON.stringify(updatedJokes));
            return {
                jokeObjects: updatedJokes
            }
        });
    }

    render() {
        return (
            <div className="JokeList">
                <Banner getNewJokes={this.getNewJokes}/>
                <JokesContainer jokes={this.state.jokeObjects} updateVote={this.handleVote}/>
            </div>
        );
    }
}

export default JokeList;