import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

const searchAPI = query => BooksAPI.search(query);

const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 250)

class SearchBooks extends Component {
  state = {
    books: [],
    query: '',
    typing: false
  }

  static propTypes = {
    updateLibrary: PropTypes.func.isRequired,
    bookStatus: PropTypes.func.isRequired
  }

  handleTyping = async (query) => {
    this.setState(() => ({
      books: [],
      query,
      typing: true
    }))
    const books = await searchAPIDebounced(query)
    this.setState(() => {
      if (Array.isArray(books) && books.length > 0) {
        return {
          books: books,
          query: query,
          typing: false
        }
      }
      /* empty books array when BooksAPI returns 
      an object on finding no books*/
      else return {
        books: [],
        query: query,
        typing: false
      }
    })
    // BooksAPI.search(query)
    //   .then((books) => {
    //     this.setState(() => {
    //       if (Array.isArray(books) && books.length > 0) {
    //         return {
    //           books: books,
    //           query: query
    //         }
    //       }
    //       /* empty books array when BooksAPI returns 
    //       an object on finding no books*/
    //       else return {
    //         books: [],
    //         query: query
    //       }
    //     })
    //   })
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar handleTyping={this.handleTyping} />
        <SearchBooksResults
          books={this.state.books}
          updateLibrary={this.props.updateLibrary}
          bookStatus={this.props.bookStatus}
          query={this.state.query}
          typing={this.state.typing} />
      </div>
    )
  }
}

export default SearchBooks
