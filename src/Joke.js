import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
    }

    upvote() {
        this.props.updateVote(this.props.id, 1);
    }

    downvote() {
        this.props.updateVote(this.props.id, -1);
    }

    render() {
        return (
            <div className="Joke">
                <div className="buttons">
                    <i className="fas fa-arrow-up" onClick={this.upvote}></i>
                    <span className="votes">{this.props.votes}</span>
                    <i className="fas fa-arrow-down" onClick={this.downvote}></i>
                </div>
                <div className="text">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default Joke;