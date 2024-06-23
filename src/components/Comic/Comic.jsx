import React from 'react';
import { Rating } from '../Rating';
import './Comic.css';

const Comic = ({ comic }) => {
    if (!comic) {
        return (
            <div className="loading-spinner" data-testid="loading-spinner">
                Loading...
            </div>
        );
    }

    return (
        <div className="comic-container" data-testid="comic-container">
            <div className="comic-content">
                <div className="comic-title">
                    <p>#{comic.num}</p>
                    <h2>{comic.title}</h2>
                </div>
                <img className="comic-image" src={comic.img} alt={comic.alt} />
                <p className="comic-date">Date: {comic.month}/{comic.day}/{comic.year}</p>
                <p className="comic-transcript">Transcript: {comic.transcript}</p>
                <Rating comic={comic} />
            </div>
        </div>
    );
};

export default Comic;