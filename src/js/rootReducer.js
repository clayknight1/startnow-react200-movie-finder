import { combineReducers } from 'redux';
import movieReducer from './containers/MovieSearchContainer/reducers';

const rootReducer = combineReducers({
    movieReducer: movieReducer
});

export default rootReducer;