import React from 'react'

function Book({ book, updateLibrary, bookStatus }) {
  return (
    <div className="book">
      <div className="book-top">
        {book.imageLinks && book.imageLinks.thumbnail ? (
          <div className="book-cover" style={{ width: 128, height: 170, backgroundImage: `url('${book.imageLinks.thumbnail}')` }}></div>
        ) : (
          <div className="book-cover" style={{ width: 128, height: 170, backgroundColor: "grey" }}></div>
        )}
        <div className="book-shelf-changer">
          <select value={bookStatus(book.id)} onChange={(event) => updateLibrary(book, event.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option
              value="currentlyReading">
              Currently Reading
            </option>
            <option
              value="wantToRead">
              Want to Read
            </option>
            <option
              value="read">
              Read
            </option>
            <option
              value="none">
              None
            </option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && (
          book.authors.map((author, index) => (
            <span key={index}>{author}<br /></span>
          )))
        }
      </div>
    </div>

  )
}

export default Book
