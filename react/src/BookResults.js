import React, { Component } from 'react';

class BookResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentWillMount() {
    var myHeaders = new Headers();

    var myInit = {
      method: 'GET',
      headers: myHeaders,
      cache: 'default'
    };

    fetch('http://localhost:8888/books', myInit)
      .then((response) => {
        if (response.status !== 200) {
          console.log("Problem status: ", response.status);
          return;
        }

        response.json().then((response) => {
          this.setState({ books: response.data })  
        }); 
      })
      .catch((err) => {
        console.log("Fetch Error: ", err)
      })
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-md-3">
          {this.state.books.map(function(book) {
            return (
              <a href="#" className="thumbnail">
                <img src={book.url} alt=""/>
              </a>);
          })}
        </div> 
      </div>);
  }
}

export default BookResults;
