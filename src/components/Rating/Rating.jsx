import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRating } from '../../redux/actions';
import './Rating.css';

const Rating = ({ comic }) => {
    const dispatch = useDispatch();
    const [comicRating, setComicRating] = useState(comic?.rating || 0);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        setComicRating(comic?.rating || 0);
    }, [comic]);

    const handleSetRating = (comicId, rating) => {
        dispatch(setRating(comicId, rating));
        setComicRating(rating);
    };

    const handleKeyDown = (event, comicId, rating) => {
        if (event.key === 'Enter' || event.key === ' ') {
            handleSetRating(comicId, rating);
        }
    };

    return (
        <div className="rating-container">
            <p>Rating:</p>
            <div className="stars">
                {[1, 2, 3, 4, 5].map(value => (
                    <span 
                        key={value}
                        role="button"
                        tabIndex={0}
                        className={`star ${value <= (hoverRating || comicRating) ? 'filled' : ''}`}
                        onClick={() => handleSetRating(comic.num, value)}
                        onKeyDown={(event) => handleKeyDown(event, comic.num, value)}
                        onMouseEnter={() => setHoverRating(value)}
                        onMouseLeave={() => setHoverRating(0)}
                    >
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Rating;