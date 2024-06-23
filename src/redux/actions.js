import axios from 'axios';
import {
    SET_COMIC,
    SET_COMICS,
    SET_RATING,
    // FETCH_COMIC_SUCCESS,
    FETCH_COMIC_FAILURE,
} from './actionTypes';

export const fetchRandomComic = () => {
    return async (dispatch, getState) => {
        try {
            const { comics } = getState();
            const currentComicResponse  = await axios.get('/info.0.json');
            const maxNum = currentComicResponse.data.num;
            const randomNum = Math.floor(Math.random() * maxNum) + 1;
            let comicResponse = {};
            if (comics.find(comic => comic.num === randomNum)) {
                comicResponse = comics.find(comic => comic.num === randomNum);
                dispatch(setComic(comicResponse));
            } else {
                comicResponse = await axios.get(`/${randomNum}/info.0.json`);
                dispatch(setComic(comicResponse.data));
                dispatch(setComics([...comics, comicResponse.data]));
            }
        } catch (error) {
            dispatch({ type: FETCH_COMIC_FAILURE, payload: error.message });
        }
    };
};

export const fetchComicById = (comicId) => {
    return async (dispatch, getState) => {
        try {
            const { comics } = getState();
            let comicResponse = {};
            if (comics.find(comic => comic.num === comicId)) {
                comicResponse = comics.find(comic => comic.num === comicId);
                dispatch(setComic(comicResponse));
            } else {
                comicResponse = await axios.get(`/${comicId}/info.0.json`);
                dispatch(setComic(comicResponse.data));
                dispatch(setComics([...comics, comicResponse.data]));
            }
        } catch (error) {
            console.error(error);
        }
    };
};

export const setRating = (comicId, rating) => {
    return (dispatch) => {
        dispatch({
            type: SET_RATING,
            payload: { comicId, rating },
        });
    };
};


const setComics = (comics) => ({
    type: SET_COMICS,
    payload: comics,
});

const setComic = (comic) => ({
    type: SET_COMIC,
    payload: comic,
});