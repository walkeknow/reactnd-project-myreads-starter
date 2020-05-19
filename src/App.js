import React from 'react'
import './App.css'
import Library from './components/Library'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    libraryBooks: [
      {
        bookId: '',
        shelf: 'Want to Read',
        title: '',
        authors: ['A', 'B'],
        imageLinks : {
          thumbnail: ''
        }
      },
    ]
  }
  render() {
    const {libraryBooks} = this.state
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library
            libraryBooks={libraryBooks}></Library>
        )}></Route>
        <Route path='/search' render={() => (
          <SearchBooks
            libraryBooks={libraryBooks}></SearchBooks>
        )}></Route>
      </div>
    )
  }
}

export default BooksApp
