import React from 'react'
import Book from './Book'

function BookList({ books, updateLibrary, bookStatus }) {
  return (
    <ol className="books-grid">
      {books.map((book, index) => (
        <li key={index}>
          <Book
            book={book}
            updateLibrary={updateLibrary}
            bookStatus={bookStatus} />
      </li>))}
    </ol>
  )
}

export default BookList
