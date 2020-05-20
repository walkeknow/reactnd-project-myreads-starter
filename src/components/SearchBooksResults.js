import React from 'react'
import BookList from './BookList'

function SearchBooksResults({
  books,
  updateLibrary,
  bookStatus,
  query,
}) {
  return (
    <div className="search-books-results">
      {query && (books.length === 0) && (
        <span>Sorry! No books found.</span>
      )}
      <BookList
        books={books}
        updateLibrary={updateLibrary}
        bookStatus={bookStatus} />

    </div>
  )
}

export default SearchBooksResults
