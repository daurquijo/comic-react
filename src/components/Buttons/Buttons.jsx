import { useDispatch } from 'react-redux';
import { fetchRandomComic, fetchComicById } from '../../redux/actions';
import { useState } from 'react';
import './Buttons.css';

const Buttons = () => {
    const dispatch = useDispatch();
    const [inputComicId, setInputComicId] = useState('');

    const handleFetchRandomComic = () => {
        dispatch(fetchRandomComic());
    };

    const handleFetchComicById = () => {
        if (inputComicId !== '' && inputComicId > 0) {
            dispatch(fetchComicById(parseInt(inputComicId)));
            setInputComicId('');
        } else {
            alert('Please enter a correct id');
        }
    };

    const handleInputChange = (event) => {
        const input = event.target.value.replace(/\D/, '');
        const maxLength = 4;
        const truncatedInput = input.slice(0, maxLength);
        setInputComicId(truncatedInput);
    };

    return (
        <div className="buttons-container">
            <button onClick={handleFetchRandomComic}>Get Random</button>
            <input
                type="text"
                value={inputComicId}
                onChange={handleInputChange}
                maxLength={4}
                pattern="[0-9]*"
                title="Please enter only numeric digits"
            />
            <button onClick={handleFetchComicById}>Get</button>
        </div>
    );
};

export default Buttons;