import React, { Component } from 'react';
import ChuckImg from './norris.png';
import './Banner.css';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.handleGetNewJokes = this.handleGetNewJokes.bind(this);
    }

    handleGetNewJokes() {
        this.props.getNewJokes();
    }
    
    render() {
        return (
            <div className="Banner">
                <h1><span>Norris</span> Jokes</h1>
                <img src={ChuckImg} alt="Chuck Norris." />
                <button onClick={this.handleGetNewJokes}>New Jokes</button>
            </div>
        )
    }
}

export default Banner;