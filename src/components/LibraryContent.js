import React from 'react'
import Bookshelf from './Bookshelf'

function LibraryContent({ libraryBooks }) {
  const titles = [
    'Currently Reading',
    'Want to Read',
    'Read'
  ]
  console.log(libraryBooks)
  const currentBooks = libraryBooks.currentlyReading
  const futureBooks = libraryBooks.wantToRead
  const pastBooks = libraryBooks.read
  return (
    <div className="list-books-content">
      <div>
        <Bookshelf title={titles[0]} books={currentBooks} ></Bookshelf>
        <Bookshelf title={titles[1]} books={futureBooks} ></Bookshelf>
        <Bookshelf title={titles[2]} books={pastBooks} ></Bookshelf>
      </div>
    </div>
  )
}

export default LibraryContent
