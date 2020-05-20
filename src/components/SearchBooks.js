import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {
  state = {
    loading: true,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          loading: false,
          books: books
        }))
      })
  }

  handleTyping = (query) => {
    if (query) {
      BooksAPI.search(query)
        .then((books) => {
          this.setState(() => {
            if (Array.isArray(books) && books.length > 0) {
              return { books: books }
            }
            /* empty books array when BooksAPI returns 
            an object on finding no books*/
            else return { books: [] }
          })
        })
    } else {
      BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            books: books
          }))
        })
    }
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar handleTyping={this.handleTyping}></SearchBooksBar>
        <SearchBooksResults
          books={this.state.books}
          loading={this.state.loading}>
        </SearchBooksResults>
      </div>
    )
  }
}

export default SearchBooks
