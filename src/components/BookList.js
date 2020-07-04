import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

function BookList({ books, updateLibrary, bookStatus }) {
  return (
    <ol className='books-grid'>
      {books.map((book, index) => (
        <li key={index}>
          <Book
            book={book}
            updateLibrary={updateLibrary}
            bookStatus={bookStatus}
          />
        </li>
      ))}
    </ol>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  updateLibrary: PropTypes.func.isRequired,
  bookStatus: PropTypes.func.isRequired,
}

export default BookList
