import React from 'react'
import BookList from './BookList'
import PropTypes from 'prop-types'

function Bookshelf({ title, books, updateLibrary, bookStatus }) {
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

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateLibrary: PropTypes.func.isRequired,
  bookStatus: PropTypes.func.isRequired
}

export default Bookshelf
