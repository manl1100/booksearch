import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import './BookResults.css';

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
      <div className="book-grid">
        <Grid doubling columns={5}>

          {this.state.books.map(function(book) {
              return (
                <Grid.Column>
                  <Image src={book.img_url} alt=""/>
                </Grid.Column>
              )
          })}
        </Grid>
      </div>)
  }
}

export default BookResults;
