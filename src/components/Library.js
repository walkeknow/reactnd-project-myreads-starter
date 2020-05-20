import React from 'react'
import LibraryTitle from './LibraryTitle'
import LibraryContent from './LibraryContent'
import OpenSearch from './OpenSearch'

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

export default Library
