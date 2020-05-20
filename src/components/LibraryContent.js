import React from 'react'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

function LibraryContent({ libraryBooks, updateLibrary, bookStatus }) {
  const titles = [
    'Currently Reading',
    'Want to Read',
    'Read'
  ]
  const currentlyReading = libraryBooks.filter(book => (book.shelf === 'currentlyReading'))
  const wantToRead = libraryBooks.filter(book => (book.shelf === 'wantToRead'))
  const read = libraryBooks.filter(book => (book.shelf === 'read'))

  return (
    <div className="list-books-content">
      <div>
        <Bookshelf
          title={titles[0]}
          books={currentlyReading}
          updateLibrary={updateLibrary}
          bookStatus={bookStatus} />
        <Bookshelf
          title={titles[1]}
          books={wantToRead}
          updateLibrary={updateLibrary}
          bookStatus={bookStatus} />
        <Bookshelf
          title={titles[2]}
          books={read}
          updateLibrary={updateLibrary}
          bookStatus={bookStatus} />
      </div>
    </div>
  )
}

LibraryContent.propTypes = {
  libraryBooks: PropTypes.array.isRequired,
  updateLibrary: PropTypes.func.isRequired,
  bookStatus: PropTypes.func.isRequired
}

export default LibraryContent
