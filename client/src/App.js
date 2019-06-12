import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    this.setState(prevState => {
      if(prevState.savedList.filter(s => s.title === movie.title).length > 0) {
        return prevState;
      }
      return {
        savedList: [...prevState.savedList, movie]
      }
    });
  };

  render() {
    return (
      <div>
        <Route exact path="/" component={ MovieList }/>
        <Route path="/movies/:id" render={ (props) => <Movie {...props} addToSavedList={this.addToSavedList}/> }/>
        <SavedList list={this.state.savedList} />
      </div>
    );
  }
}
