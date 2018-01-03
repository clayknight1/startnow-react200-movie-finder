import axios from 'axios';

export const movieSearch = (title) => {
    return {
        type: 'MOVIE_SEARCH',
        payload: title   
    }
};

export const submitEntry = (formattedTitle) => {
    return {
        type: 'SUBMIT_ENTRY',
        payload: axios.get('https://www.omdbapi.com/?s=' + formattedTitle + '&apikey=71b5f8fc')
        .then((response) => {
            let searchData = response.data;
            return searchData
        })
        .catch((error) => {
            alert('ERROR - Try Again')
        })
    }
};

export const getDetails = (id) => {
    return {
        type: 'GET_DETAILS',
        payload: axios.get('https://www.omdbapi.com/?i=' + id + '&apikey=71b5f8fc')
        .then((response) => {
            let movieProfile = response.data;
            return movieProfile
        })
    }
}
