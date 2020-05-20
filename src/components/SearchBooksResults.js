import React from 'react'
import BookList from './BookList'

function SearchBooksResults({ books, loading }) {
  return (
    <div className="search-books-results">
      {loading ? (
        <span>Loading...</span>) : (
          <BookList books={books}></BookList>
        )}
    </div>
  )
}

export default SearchBooksResults
