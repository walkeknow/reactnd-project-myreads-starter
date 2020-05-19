import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(()=>({
        books: books
      }))
    })
  }

  render() {
    return (
        <div className="search-books">
          <SearchBooksBar></SearchBooksBar>
          <SearchBooksResults books={this.state.books}></SearchBooksResults>
        </div>
    )
  }
}

export default SearchBooks
