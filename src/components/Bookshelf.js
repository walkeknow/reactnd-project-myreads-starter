import React from 'react'
import BookList from './BookList'

/* componentDidMount() {
  BooksAPI.getAll()
  .then((books) => {
    console.log(books)
    this.setState(()=>({
      libraryBooks: books
    }))
  })
} */

function Bookshelf({ title, books }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
      <BookList books={books}></BookList>
      </div>
    </div>
  )
}

export default Bookshelf
