import React from 'react'
import './App.css'
import Library from './components/Library'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    libraryBooks: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    },
    bookShelf: [

    ]
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => {
          const currentlyReading = []
          const wantToRead = []
          const read = []
          for (const book of books) {
            if (book.shelf === 'currentlyReading') {
              currentlyReading.push(book.id)
            }
            if (book.shelf === 'wantToRead') {
              wantToRead.push(book.id)
            }
            if (book.shelf === 'read') {
              read.push(book.id)
            }
          }
          const bookObj = {
            "currentlyReading": currentlyReading,
            "wantToRead": wantToRead,
            "read": read
          }
          console.log(bookObj)
          return {
            libraryBooks: bookObj
          }
        })
      })
  }

  getBooksFromState = (books) => {
    for (const bookId of books) {
      BooksAPI.get(bookId)
        .then((book) => {
          console.log(book)
        })
    }
  }

  bookStatus = (bookId) => {
    console.log(this.state.libraryBooks)
    for (const [key, valueArray] of Object.entries(this.state.libraryBooks)) {
      if (key === 'currentlyReading') {
        if (valueArray.includes(bookId)) {
          return 'currentlyReading'
        }
      }
      else if (key === 'wantToRead') {
        if (valueArray.includes(bookId)) {
          return 'wantToRead'
        }
      }
      else if (key === 'read') {
        if (valueArray.includes(bookId)) {
          return 'read'
        }
      }
    }
    return 'none'
  }

  updateLibrary = (book, bookshelf) => {
    BooksAPI.update(book, bookshelf)
      .then(books => {
        console.log('API:', books)
        this.setState(() => ({
          libraryBooks: {...books}
        }))
      })
  }

  render() {
    const { libraryBooks } = this.state
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library
            libraryBooks={libraryBooks} />
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
