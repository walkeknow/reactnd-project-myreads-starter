import React from 'react'
import Book from './Book'

function BookList({ books }) {
  return (
    <ol className="books-grid">
      {books.map((book, index) => (
        <li key={index}>
          <Book book={book}></Book>
        </li>
      ))}

    </ol>
  )
}

export default BookList
