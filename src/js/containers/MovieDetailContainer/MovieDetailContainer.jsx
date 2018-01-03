import React from 'react';

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        const { movieProfile } = this.props;
        return(
            <div className="container">
            <div className="row">
                <div className="mx-auto text-center">
                    <h1 className="display-4">Movie Finder </h1>
                    <p>Viewing Movie {this.props.match.params.id}</p>
                </div>
                <div className="row">
                    <div className="col-4 mt-5">
                        <img src={ movieProfile.Poster }
                        />
                    </div>
                    <div className="col-8">
                        <div className="card mx-auto mt-5 text-center">
                            <div className="card-body">
                                <h2 className="card-title">{ movieProfile.Title }</h2>
                                <h4 className="mb-3">{movieProfile.Runtime} | {movieProfile.Rated} | {movieProfile.Genre}</h4>
                                <p className="text-left">
                                    <strong>Directed By {movieProfile.Director}</strong>
                                </p>
                                <p className="text-left">
                                    <strong>Written by {movieProfile.Writer}</strong>
                                </p>
                                <p className="card-text">{ movieProfile.Plot }</p>
                            </div>
                            <div className="px-3 scores">
                                <p className="text-left">
                                    <strong>IMDB Score: {movieProfile.imdbRating}</strong>
                                </p>
                                <p className="text-left">
                                    <strong>MetaScore: {movieProfile.Metascore}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MovieDetailContainer;