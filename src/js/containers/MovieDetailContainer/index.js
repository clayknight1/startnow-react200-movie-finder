import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
    return {
        movieProfile: store.movieReducer.movieProfile
    };
}

export default connect(mapStoreToProps)(MovieDetailContainer);