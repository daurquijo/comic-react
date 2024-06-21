import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomComic, fetchComicById, setRating } from '../redux/actions';

const ComicDisplay = () => {
    const comic = useSelector(state => state.comic);
    const comics = useSelector(state => state.comics);
    const [comicRating, setComicRating] = useState(comic?.rating ? comic?.rating : 0);
    const [inputComicId, setInputComicId] = useState('');

    const handleInputChange = (event) => {
        const input = event.target.value.replace(/\D/, '');
        const maxLength = 4;
        const truncatedInput = input.slice(0, maxLength);
        setInputComicId(truncatedInput);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRandomComic());
    }, [dispatch]);

    const handleFetchRandomComic = () => {
        dispatch(fetchRandomComic());
    };

    const handleFetchComicById = (comicId) => {
        if (comicId) {
            dispatch(fetchComicById(parseInt(comicId)));
        } else if (inputComicId !== '' && inputComicId > 0) {
            dispatch(fetchComicById(parseInt(inputComicId)));
            setInputComicId('');
        } else {
            alert('Please enter a correct id')
        }
    };

    const handleSetRating = (comicId, rating) => {
        dispatch(setRating(comicId, rating));
        setComicRating(rating);
    };

    return (
        <div>
            <h1>Current Comic:</h1>
            <div>
                {comic && (
                    <div>
                        <h2>{comic.title}</h2>
                        <img src={comic.img} alt={comic.alt} />
                        <p>Rating: {comic?.rating ? comic.rating : comicRating }</p>
                        {[1,2,3,4,5].map(value => 
                            <button key={value} onClick={() => handleSetRating(comic.num, value)}>Set Rating {value}</button>
                        )}
                    </div>
                )}
            </div>
            <div>
                <button onClick={() => handleFetchRandomComic()}>Get Random</button>
                <input
                    type="text"
                    value={inputComicId}
                    onChange={handleInputChange}
                    maxLength={4}
                    pattern="[0-9]*"
                    title="Please enter only numeric digits"
                />
                <button onClick={() => handleFetchComicById()}>Get</button>
            </div>
            <h1>List of Comics:</h1>
            <ul>
                {comics.map(comic => (
                    <li key={comic.num}>
                        {comic.title} - <button onClick={() => handleFetchComicById(comic.num)}>Fetch Comic</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComicDisplay;
