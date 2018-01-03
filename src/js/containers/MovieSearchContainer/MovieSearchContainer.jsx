import React from 'react';
import {
    movieSearch,
    submitEntry,
    getDetails
} from './searchActions';
import { Link } from 'react-router-dom';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmitEntry = this.handleSubmitEntry.bind(this);
        this.handleDetails = this.handleDetails.bind(this);
    }

    handleInput(event) {
        const { dispatch } = this.props;
        dispatch(movieSearch(event.target.value))
    }

    handleSubmitEntry() {
        const { searchTitle, dispatch } = this.props;
        const formattedTitle = searchTitle.replace(' ', '%20')
        dispatch(submitEntry(searchTitle));
    }

    handleDetails(event) {
        const { dispatch } = this.props;
        const id = event.target.name;
        dispatch(getDetails(id));
    }

    render() {
        const { movieData } = this.props;

        return (
            <div className="w-75 mx-auto">
                <div>
                    <h1 className="text-center mb-4 display-4">Movie Search</h1>
                </div>
                <div className="input-group mt-1">
                    <span className="input-group-btn">
                        <button type="button" onClick={this.handleSubmitEntry} className="btn btn-secondary">Search</button>
                    </span>
                    <input type="text" className="form-control" onChange={this.handleInput} placeholder="Enter Movie Title..." />
                </div>
                {!!movieData.Search && movieData.Search.map(movie => {
                    return (
                        < div className="card mt-5" key={ movie.imdbID } >
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <img className="searchImage" src={ movie.Poster } />
                                    </div>
                                    <div className="col-10">
                                        <h3 className="card-title display-5 text-center">{ movie.Title }</h3>
                                        <hr />
                                        <h4 className="text-center">{ movie.Year }</h4>
                                        <Link to={`${movie.imdbID}`} ><button type="button" name={ movie.imdbID } onClick={ this.handleDetails } className="btn btn-info btn-block px-5">More Info</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </div>
        )
    }
}

export default MovieSearchContainer;