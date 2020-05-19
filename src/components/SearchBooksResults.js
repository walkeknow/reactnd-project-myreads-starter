import React from 'react'
import BookList from './BookList'

function SearchBooksResults({books}) {
  return (
    <div className="search-books-results">
      <BookList books={books}></BookList>
    </div>
  )
}

export default SearchBooksResults
