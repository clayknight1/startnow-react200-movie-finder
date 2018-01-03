import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
    return {
        searchTitle: store.movieReducer.searchTitle,
        movieData: store.movieReducer.movieData,
        movieProfile: store.movieReducer.movieProfile
    };
}

export default connect(mapStoreToProps)(MovieSearchContainer);