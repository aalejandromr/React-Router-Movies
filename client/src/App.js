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
    // const savedList = this.state.savedList;
    // savedList.push(movie);
    this.setState(prevState => {
      // if(prevState.savedList.map(s => s.title).includes(movie.title)) {
      //   return prevState
      // }
      if(prevState.savedList.filter(s => s.title === movie.title).length > 0) {
        return prevState;
      }
      return {
        savedList: [...prevState.savedList, movie]
      }
    });
  };

  // shouldComponentUpdate = (newProps, nexState) => {
  //   // if(this.state.savedList.includes(currentList => currentList.id === nexState.savedList.id))
  //   // console.log(this.state.savedList
  //   //   .map(savedL => savedL.id)
  //   //   .includes(nexState.savedList[nexState.savedList.length - 1]["id"]));
  //   // console.log("Next", nexState.savedList);
  //   // console.log(this.state.savedList.map(savedL => savedL.id).includes(nexState.savedList[nexState.savedList.length - 1]["id"]));   
  //   // None of the above works

  //   // lets try with set
  //   return new Set(nexState.savedList.map(savedList => savedList.id)).size === this.state.savedList.map(savedList => savedList.id).length;
  // }

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
