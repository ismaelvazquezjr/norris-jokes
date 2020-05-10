import React, { Component } from 'react';
import ChuckImg from './norris.png';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <h1><span>Norris</span> Jokes</h1>
                <img src={ChuckImg} alt="Silly face emoji." />
                <button>New Jokes</button>
            </div>
        )
    }
}

export default Banner;