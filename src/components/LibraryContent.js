import React from 'react'
import Bookshelf from './Bookshelf'

function LibraryContent({ libraryBooks }) {
  const titles = [
    'Currently Reading',
    'Want to Read',
    'Read'
  ]
  console.log(libraryBooks)
  const currentBooks = libraryBooks.filter(book => book.shelf === titles[0])
  const futureBooks = libraryBooks.filter(book => book.shelf === titles[1])
  const pastBooks = libraryBooks.filter(book => book.shelf === titles[2])
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
