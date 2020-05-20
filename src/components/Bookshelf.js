import React, { Component } from 'react'
import BookList from './BookList'

class Bookshelf extends Component {

  render() {
    const { title, books, updateLibrary, bookStatus } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BookList
            books={books}
            updateLibrary={updateLibrary}
            bookStatus={bookStatus} />
        </div>
      </div>
    )
  }

}

export default Bookshelf
