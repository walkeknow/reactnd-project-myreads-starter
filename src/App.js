import React from 'react'
import './App.css'
import Library from './components/Library'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    libraryBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        console.log(books)
        this.setState(() => ({
          libraryBooks: [...books]
        }))
      })
  }

  bookStatus = (bookId) => {
    for (const book of this.state.libraryBooks) {
      if (book.id === bookId) {
        if (book.shelf === 'currentlyReading') {
          return 'currentlyReading'
        }
        else if (book.shelf === 'wantToRead') {
          return 'wantToRead'
        }
        else if (book.shelf === 'read') {
          return 'read'
        }
      }
    }
    return 'none'
  }

  updateLibrary = (book, bookshelf) => {
    BooksAPI.update(book, bookshelf)
      .then(books => {
        console.log('update:', books)
        BooksAPI.getAll()
          .then(allBooks => {
            console.log(allBooks)
            this.setState(() => ({
              libraryBooks: [...allBooks]
            }))
          })
      })
  }

  render() {
    const { libraryBooks } = this.state
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library
            libraryBooks={libraryBooks}
            updateLibrary={this.updateLibrary}
            bookStatus={this.bookStatus} />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks
            updateLibrary={this.updateLibrary}
            bookStatus={this.bookStatus} />
        )} />
      </div>
    )
  }
}

export default BooksApp
