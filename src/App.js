import React from 'react'
import './App.css'
import Library from './components/Library'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    libraryBooks: [
      {
        id: '',
        shelf: 'Want to Read',
        title: '',
        authors: ['A', 'B'],
        imageLinks: {
          thumbnail: ''
        }
      },
    ]
  }

  bookStatus = () => {
    return "none"
  }

  updateLibrary = (book, bookshelf) => {
    if (bookshelf !== "none") {
      BooksAPI.update(book, bookshelf)
        .then(book => {
          console.log(book)
        })
    }
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
