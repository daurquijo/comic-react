import React from 'react';
import { Rating } from '../Rating';
import './Comic.css';

const Comic = ({ comic }) => {
    return (
        <div className="comic-container">
            {comic && (
                <div className="comic-content">
                    <h2 className="comic-title">{comic.title}</h2>
                    <img className="comic-image" src={comic.img} alt={comic.alt} />
                    <p className="comic-date">Date: {comic.month}/{comic.day}/{comic.year}</p>
                    <p className="comic-transcript">Transcript: {comic.transcript}</p>
                    <Rating comic={comic} />
                </div>
            )}
        </div>
    );
};

export default Comic;