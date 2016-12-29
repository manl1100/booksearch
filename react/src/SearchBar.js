import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  render() {
    return (
      <div className="search-bar-container">
        <div className="input-group input-group-lg">
          <input className="form-control" type="text" aria-describedby="sizing-addon1"/>
          <span className="input-group-addon" id="sizing-addon1">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
