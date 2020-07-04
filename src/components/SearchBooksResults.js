import React from 'react'
import BookList from './BookList'
import PropTypes from 'prop-types'

function SearchBooksResults({
  books,
  updateLibrary,
  bookStatus,
  query,
  typing,
}) {
  return (
    <div className='search-books-results'>
      {query && books.length === 0 && !typing && (
        <span>Sorry! No books found.</span>
      )}
      <BookList
        books={books}
        updateLibrary={updateLibrary}
        bookStatus={bookStatus}
      />
    </div>
  )
}

SearchBooksResults.propTypes = {
  books: PropTypes.array.isRequired,
  updateLibrary: PropTypes.func.isRequired,
  bookStatus: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
}

export default SearchBooksResults
