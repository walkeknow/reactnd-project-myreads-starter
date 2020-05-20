import React from 'react'
import LibraryTitle from './LibraryTitle'
import LibraryContent from './LibraryContent'
import OpenSearch from './OpenSearch'
import PropTypes from 'prop-types'

function Library({ libraryBooks, updateLibrary, bookStatus }) {
  return (
    <div>
      <div className="list-books">
        <LibraryTitle />
        <LibraryContent
          libraryBooks={libraryBooks}
          updateLibrary={updateLibrary}
          bookStatus={bookStatus} />
        <OpenSearch />
      </div>

    </div>
  )
}

Library.propTypes = {
  libraryBooks: PropTypes.array.isRequired,
  updateLibrary: PropTypes.func.isRequired,
  bookStatus: PropTypes.func.isRequired
}

export default Library
