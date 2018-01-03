import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container pt-4">
        <Route exact path='/' component={ MovieSearchContainer } />
        <Route path='/:id' component={ MovieDetailContainer } />
        </div>
      </Router>
    );
  }
}

export default App;
