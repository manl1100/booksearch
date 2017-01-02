import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import './SearchBar.css';

class SearchBar extends Component {

  render() {
    return (
      <Input fluid className='search-bar' size='big' icon='search' placeholder='Search...' />
    );
  }
}

export default SearchBar;
