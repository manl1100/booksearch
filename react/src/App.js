import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import BookResults from './BookResults';
import BookMenu from './BookMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookMenu />
        <SearchBar />
        <BookResults />
      </div>
    );
  }
}

export default App;
