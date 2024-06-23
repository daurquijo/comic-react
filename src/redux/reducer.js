import { SET_COMIC, SET_COMICS, SET_RATING } from './actionTypes';

const initialState = {
    comic: null,
    comics: [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMICS:
            return { ...state, comics: action.payload };
        case SET_COMIC:
            return { ...state, comic: action.payload };
        case SET_RATING:
            const updatedComics = state.comics.map(comic => {
                if (comic.num === action.payload.comicId) {
                    return { ...comic, rating: action.payload.rating };
                }
                return comic;
            });
            return { ...state, comics: updatedComics };
        default:
            return state;
    }
};

export default reducer;