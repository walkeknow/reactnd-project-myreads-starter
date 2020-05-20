import React from 'react'
import Book from './Book'

function BookList({ books }) {
  return (
    <ol className="books-grid">
      {books.length !== 0 ? (
        books.map((book, index) => (
          <li key={index}>
            <Book book={book}></Book>
          </li>
        ))
      ):
      (
        <li>Sorry! No related books found.</li>
      )}
    </ol>
  )
}

export default BookList
