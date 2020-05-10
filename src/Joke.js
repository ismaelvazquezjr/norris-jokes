import React, { Component } from 'react';

class Joke extends Component {
    render() {
        return (
            <div className="Joke">
                <div className="buttons">
                    <i className="fas fa-arrow-up"></i>
                    <span>{this.props.votes}</span>
                    <i className="fas fa-arrow-down"></i>
                </div>
                <div className="text">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default Joke;