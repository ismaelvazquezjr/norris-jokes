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
            jokeObjects: []
        }
    }

    async componentDidMount() {
        const jokeObjects = await this.getJokeObjects().then(data => data).catch(err => {throw new Error(err)});
        this.setState({
            jokeObjects: jokeObjects
        });
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

    }

    render() {
        return (
            <div className="JokeList">
                <Banner />
                <JokesContainer jokes={this.state.jokeObjects} />
            </div>
        );
    }
}

export default JokeList;