const defaultState = {
    searchTitle: '',
    movieData: {
        search: []
    },
    movieProfile: {}
}

export default function movieReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'MOVIE_SEARCH': {
            return {
                ...state,
                searchTitle: payload
            }
        }
        case 'SUBMIT_ENTRY_FULFILLED': {
            return {
                ...state,
                movieData: { ...payload }
            }
        }
        case 'GET_DETAILS_FULFILLED': {
            return {
                ...state,
                movieProfile: { ...payload }
            }
        }
        default: {
            return state;
        }
    }
}