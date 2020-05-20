import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {
  state = {
    books: [],
    query: ''
  }

  handleTyping = (query) => {
    BooksAPI.search(query)
      .then((books) => {
        this.setState(() => {
          if (Array.isArray(books) && books.length > 0) {
            return {
              books: books,
              query: query
            }
          }
          /* empty books array when BooksAPI returns 
          an object on finding no books*/
          else return {
            books: [],
            query: query
          }
        })
      })
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar handleTyping={this.handleTyping}></SearchBooksBar>
        <SearchBooksResults
          books={this.state.books}
          updateLibrary={this.props.updateLibrary}
          bookStatus={this.props.bookStatus}
          query={this.state.query}/>
      </div>
    )
  }
}

export default SearchBooks
