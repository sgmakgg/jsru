import { useReducer } from 'react';

const initialState = {
    review: '',
    rating: 0,
    name: ''
};

const SET_REVIEW = 'SET_REVIEW';
const SET_RATING = 'SET_RATING';
const SET_NAME = 'SET_NAME';
const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_REVIEW:
            return { ...state, review: action.payload };
        case SET_RATING:
            return { ...state, rating: action.payload };
        case SET_NAME:
            return { ...state, name: action.payload };
        case SET_INITIAL_STATE:
            return { ...action.payload };
        default:
            return state;
    }
};

const useReviewForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setReview = (review) => {
        dispatch({ type: SET_REVIEW, payload: review });
    };

    const setRating = (rating) => {
        dispatch({ type: SET_RATING, payload: rating });
    };

    const setName = (name) => {
        dispatch({ type: SET_NAME, payload: name });
    };

    const setInitialState = () => {
        dispatch({ type: SET_INITIAL_STATE, payload: initialState });
    };

    return {
        state,
        setReview,
        setRating,
        setName,
        setInitialState
    };
};

export default useReviewForm;